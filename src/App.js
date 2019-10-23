import React from 'react';
import {connect} from 'react-redux';

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

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ links: nextProps.links });
  // }

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
        <div className="previewContainer">
          {
            this.state.view === 'home' &&
            (images && images.length>0) &&
            images.map(item => {
              return(
                <div className="imagePreviewContainer">
                  <img
                    src={item.link}
                    className="imagePreview"
                    onClick={()=>this.toggleFullscreen(item.link)}
                  />
                </div>
              )
            })
          }
        </div>
        {
          this.state.view === 'imgur' &&
          <Auth />
        }
        {
          this.state.fullscreen !== null &&
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
