import React from 'react';
import {connect} from 'react-redux';

import './App.scss';
import { fetchImages } from './components/imgur-management/imgur-actions.js';

import ImageFullscreen from './components/image-fullscreen';
import Toolbar from './components/toolbar';
import Auth from './components/auth.js';

class App extends React.Component {
  state = {
    fullscreen: false,
    view: 'home'
  }

  componentDidMount() {
    this.props.fetchImages();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ links: nextProps.links });
  }

  setView = (view) => {
    this.setState({ view });
  }

  toggleFullscreen = () => {
    this.setState({ fullscreen: false });
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

        {/* <ImageFullscreen /> */}
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
