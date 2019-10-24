import React from 'react';

import '../styles/imgur-styles.scss';

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
                                <button className="actionButton" onClick={()=>this.props.deleteLink(link.id)}>
                                    Delete
                                </button>
                                {
                                    (link.id !== 0) &&
                                    <button className="actionButton" onClick={()=>this.props.changeOrder(link.id, 'up')}>
                                        Up
                                    </button>
                                }
                                {
                                    (link.id !== links.length-1) &&
                                    <button className="actionButton" onClick={()=>this.props.changeOrder(link.id, 'down')}>
                                        Down
                                    </button>
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