import React from 'react';
import './styles/toolbar.scss';
import homeIcon from '../assets/home.png';
import loginIcon from '../assets/login.png';

export default function Toolbar(props) {
    return (
        <div className="toolbar">
            <div onClick={()=>props.setView('home')}>
                <img src={homeIcon} className="toolbarIcon" alt="home" />
            </div>
            {/* <div onClick={()=>props.setView('info')}>
                INFO
            </div> */}
            <div onClick={()=>props.setView('imgur')}>
            <img src={loginIcon} className="toolbarIcon" alt="login" />
            </div>
        </div>
    );
}