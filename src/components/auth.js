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
                    <button onClick={this.logout}>Log Out</button>                
                    :
                    <button onClick={this.login}>Log In</button>              
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