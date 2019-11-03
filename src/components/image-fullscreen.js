import React from 'react';
import './styles/image-fullscreen.scss';

import CloseButton from '../assets/close.png';

function imageFullscreen(props) {
    const { image } = props;
    return (
        <div className="imageFullscreenContainer">
            <div className="fullscreenBackground"></div>
            <div className="toggleFullscreen" onClick={()=>props.toggleFullscreen(null)}>
                <img src={CloseButton} className="closeButton" alt="close" />
            </div>
            <img className="fullscreenImage" src={image} alt="fullscreen"/>
        </div>
    );
}

export default imageFullscreen;