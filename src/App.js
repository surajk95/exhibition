import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import lazySizes from 'lazysizes';

import './App.scss';
import './components/styles/loading-screen.scss';

import { fetchImages } from './components/imgur-management/imgur-actions.js';

import ImageFullscreen from './components/image-fullscreen';
import Toolbar from './components/toolbar';
import Auth from './components/auth.js';
import InfoPage from './components/info-page';
import LoadingScreen from './components/loading-screen.js';

class App extends React.Component {
  state = {
    fullscreen: null,
    view: 'home'
  }

  componentDidMount() {
    this.props.fetchImages();
    window.addEventListener('wheel', this.replaceVerticalScrollByHorizontal, {passive: false});
    window.addEventListener('keydown', this.controlFullscreen);
  }

  replaceVerticalScrollByHorizontal = (event) => {
    
    let scrollDiv = document.getElementById("previewContainer");
    if (event.deltaY != 0) {
      // manually scroll horizonally instead
      scrollDiv && scrollDiv.scroll(scrollDiv.scrollLeft + event.deltaY * 3, scrollDiv.scrollTop);
      event.preventDefault();
    }
    return;
  }

  controlFullscreen = (event) => {
    const key = event.key;
    if(key === 'Escape') {
      this.setState({ fullscreen: null });
    }
  }

  setView = (view) => {
    this.setState({ view });
  }

  toggleFullscreen = (link) => {
    this.setState({ fullscreen: link });
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.replaceVerticalScrollByHorizontal);
    window.removeEventListener('keydown', this.controlFullscreen);
  }

  render() {
    const { images, isLoading } = this.props;
    
    if(isLoading) {
      return <LoadingScreen />
    }
    return (
      <div className="App">
        {
          this.state.view === 'home' &&
            <div className="previewContainer" id="previewContainer">
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
                          className="imagePreview lazyload"
                          data-src={item.link}
                          src="https://place-hold.it/300x900/black"
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
          this.state.view === 'info' &&
          <InfoPage />
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
          images,
          isLoading
      }
   } = state;
  return {
     images,
     isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchImages: () => dispatch(fetchImages()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
