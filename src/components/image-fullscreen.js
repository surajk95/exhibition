import React from 'react';
import './styles/image-fullscreen.scss';

function imageFullscreen(props) {
    //const { image } = props;
    return (
        <div className="imageFullscreenContainer">
            <div className="toggleFullscreen" onClick={props.toggleFullscreen}>CLOSE</div>
            <img className="fullscreenImage" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4153010a-bcb0-4dbd-ad90-185607296002/ddawuvo-3d1eb2ef-6a41-4b7d-8e74-10d5465d631e.png/v1/fill/w_1381,h_578,q_70,strp/batfleck_ii_by_surajk95_ddawuvo-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcxNiIsInBhdGgiOiJcL2ZcLzQxNTMwMTBhLWJjYjAtNGRiZC1hZDkwLTE4NTYwNzI5NjAwMlwvZGRhd3V2by0zZDFlYjJlZi02YTQxLTRiN2QtOGU3NC0xMGQ1NDY1ZDYzMWUucG5nIiwid2lkdGgiOiI8PTQwOTYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mvOQOaUWivtDAnAdR_5nn8AvOpVLgn_8DSvZzmi7UX8" alt="fullscreen"/>
        </div>
    );
}

export default imageFullscreen;