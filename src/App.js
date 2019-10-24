import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import './App.scss';
import { fetchImages } from './components/imgur-management/imgur-actions.js';

import ImageFullscreen from './components/image-fullscreen';
import Toolbar from './components/toolbar';
import Auth from './components/auth.js';

class App extends React.Component {
  state = {
    fullscreen: null,
    view: 'home'
  }

  componentDidMount() {
    this.props.fetchImages();
  }

  setView = (view) => {
    this.setState({ view });
  }

  toggleFullscreen = (link) => {
    this.setState({ fullscreen: link });
  }

  render() {
    const {images} = this.props;

    return (
      <div className="App">
        {
          this.state.view === 'home' &&
            <div className="previewContainer">
              {
                (images && images.length>0) &&
                  images.map(item => {
                    return(
                      <div key={item.id} className="imagePreviewContainer" onClick={()=>this.toggleFullscreen(item.link)}>
                        <div className="previewBackground"></div>
                        <div className="descriptionContainer">
                          <div className="itemTitle">
                            {item.description}
                          </div>
                          <div className="itemDate">
                            {moment.unix(item.datetime).format('D MMM, YY')}
                          </div>
                        </div>
                        <img
                          src={item.link}
                          className="imagePreview"
                          alt="click for fullscreen"
                        />
                      </div>
                    )
                  })
              }
            </div>
        }
        {
          this.state.view === 'imgur' &&
          <Auth />
        }
        {
          this.state.view === 'home' && this.state.fullscreen !== null &&
          <ImageFullscreen
            image={this.state.fullscreen}
            toggleFullscreen={this.toggleFullscreen}
          />
        }
        
        <Toolbar setView={this.setView} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
      ImgurReducer: {
          images
      }
   } = state;
  return {
     images
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchImages: () => dispatch(fetchImages()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
