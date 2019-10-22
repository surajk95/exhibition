import React from 'react';
import './App.scss';

import ImageFullscreen from './components/image-fullscreen';
import Toolbar from './components/toolbar';
import Auth from './components/auth.js';

class App extends React.Component {
  state = {
    fullscreen: false,
    view: 'home'
  }

  setView = (view) => {
    this.setState({ view });
  }

  toggleFullscreen = () => {
    this.setState({ fullscreen: false });
  }

  render() {
    return (
      <div className="App">
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

export default App;
