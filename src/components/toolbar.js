import React from 'react';
import './styles/toolbar.scss';

export default function Toolbar(props) {
    return (
        <div className="toolbar">
            <button onClick={()=>props.setView('home')}>
                Home
            </button>
            <button onClick={()=>props.setView('imgur')}>
                Login
            </button>
        </div>
    );
}