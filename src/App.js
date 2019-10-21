import React from 'react';
import './App.scss';

import ImageFullscreen from './components/image-fullscreen';
import ImgurHome from './components/imgur-management/imgur-home';

class App extends React.Component {
  state = {
    fullscreen: false,
  }

  toggleFullscreen = () => {
    this.setState({ fullscreen: false });
  }

  render() {
    return (
      <div className="App">
        <ImgurHome />
        {/* <ImageFullscreen /> */}
      </div>
    );
  }
}

export default App;
