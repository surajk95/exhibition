import React from 'react';
import {connect} from 'react-redux';

import './App.scss';
import { fetchState } from './components/imgur-management/imgur-actions.js';

import ImageFullscreen from './components/image-fullscreen';
import Toolbar from './components/toolbar';
import Auth from './components/auth.js';

class App extends React.Component {
  state = {
    fullscreen: false,
    view: 'home'
  }

  componentDidMount() {
    this.props.fetchState();
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

const mapStateToProps = (state) => {
  const {
      ImgurReducer: {
          links
      }
   } = state;
  return {
     links
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchState: () => dispatch(fetchState()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
