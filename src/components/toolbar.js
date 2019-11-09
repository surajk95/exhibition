import React from 'react';
import './styles/toolbar.scss';

export default function Toolbar(props) {
    return (
        <div className="toolbar">
            <div onClick={()=>props.setView('home')}>
                HOME
            </div>
            <div onClick={()=>props.setView('info')}>
                INFO
            </div>
            <div onClick={()=>props.setView('imgur')}>
                LOGIN
            </div>
        </div>
    );
}