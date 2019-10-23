import React from 'react';
import './styles/image-fullscreen.scss';

function imageFullscreen(props) {
    const { image } = props;
    return (
        <div className="imageFullscreenContainer">
            <div className="toggleFullscreen" onClick={()=>props.toggleFullscreen(null)}>CLOSE</div>
            <img className="fullscreenImage" src={image} alt="fullscreen"/>
        </div>
    );
}

export default imageFullscreen;