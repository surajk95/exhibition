import React from 'react';

export default function InfoPage(props) {
    return (
        <div className="infoPage">
            <div className="infoHeading">
                EXHIBITION
            </div>
            <div className="instructions">
                Exhibition by 
                <a href="https://surajk95.github.io" target="_blank" rel="noopener noreferrer">
                    surajk95.
                </a>
                <br/>
                <p>
                    This is a demo website.
                    Scroll through to see all images.
                    Hover over each image to see the title and date.
                    Click on images to view fullscreen.
                </p>
               
                <p>
                    To get your own website like this, contact me at
                    <a href="mailto:sssurajsuraj@gmail.com">sssurajsuraj@gmail.com</a>
                </p>
            </div>
        </div>
    )
}