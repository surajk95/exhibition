import React from 'react';

import '../styles/imgur-styles.scss';

import deleteIcon from '../../assets/close.png';
import arrowUp from '../../assets/arrow-up.png';
import arrowDown from '../../assets/arrow-down.png';

class ImgurShowLinks extends React.Component {
    render() {
        const { links } = this.props;

        return (
            <div className="linksHome">
                {
                    (links && links.length>0) &&
                    links.map(link => {
                        return (
                            <div key={link.id} className="linkContainer">
                                <a href={link.title} className="linkText" target="_blank" rel="noopener noreferrer">{link.title}</a>
                                <img
                                    src={deleteIcon}
                                    alt="delete"
                                    className="actionButton" onClick={()=>this.props.deleteLink(link.id)}/>
                                {
                                    (link.id !== 0) &&
                                    <img
                                        src={arrowUp}
                                        alt="move up"
                                        className="actionButton" onClick={()=>this.props.changeOrder(link.id, 'up')}/>
                                }
                                {
                                    (link.id !== links.length-1) &&
                                    <img
                                        src={arrowDown}
                                        alt="move down"
                                        className="actionButton" onClick={()=>this.props.changeOrder(link.id, 'down')}/>
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ImgurShowLinks;