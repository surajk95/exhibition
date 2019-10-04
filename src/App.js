import React from 'react';
import './App.scss';

import ImageFullscreen from './components/image-fullscreen';

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
        <ImageFullscreen />
      </div>
    );
  }
}

export default App;
