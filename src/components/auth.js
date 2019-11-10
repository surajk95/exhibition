import React from 'react';
import firebase, { auth, provider } from '../firebase.js';

import ImgurHome from './imgur-management/imgur-home';

class Auth extends React.Component {
    state = {
        user: null,
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
              this.setState({ user });
            } 
          });
    }

    logout = () => {
        auth.signOut()
        .then(() => {
            this.setState({
                user: null
        });
        });
      }

      login = () => {
        auth.signInWithPopup(provider) 
          .then((result) => {
            const user = result.user;
            this.setState({
              user
            });
          });
      }

    render() {
        return (
            <div>

                {this.state.user ?
                    <button className="loginButton" onClick={this.logout}>Log Out</button>                
                    :
                    <button className="loginButton" onClick={this.login}>Log In</button>              
                }
                {
                  !this.state.user &&
                  <div className="loginInfo">
                    <p>
                      This is a demo website.
                      <br/>Scroll through to see all images.
                      <br/>Hover over each image to see the title and date.
                      <br/>Click on images to view fullscreen.
                    </p>
                    <p>
                      Content you post will not appear here unless you create your own instance of Exhibition.<br/>
                        <br/>To get your own website like this, contact me at 
                         <a target="_blank" rel="noopener noreferrer" href="mailto:sssurajsuraj@gmail.com"> sssurajsuraj@gmail.com</a>
                    </p>
                  </div>
                }
                {
                    this.state.user &&
                    <ImgurHome user={this.state.user} />
                }
            </div>
        )
    }
}

export default Auth;