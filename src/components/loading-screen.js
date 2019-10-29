import React from 'react';
import './styles/image-fullscreen.scss';

class LoadingScreen extends React.Component {

    componentDidMount() {
        this.handleLoad();
        this.flash =setInterval(this.handleLoad, 1500);
    }
    
    componentWillUnmount() {
        clearInterval(this.flash);
    }

    handleLoad = () => {
        document.getElementById('loadingText').classList.toggle('hidden');
    }

    render() {
        return (
            <div className="loadingScreenContainer">
                <div id="loadingText" className="loadingText">
                    EXHIBITION
                </div>
            </div>
        );
    }  
}

export default LoadingScreen;