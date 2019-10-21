import React from 'react';

class ImgurShowLinks extends React.Component {
    render() {
        const { links } = this.props;

        return (
            <div>
                {
                    (links && links.length>0) &&
                    links.map(link => {
                        return (
                            <div key={link.id}>
                                {link.title}
                                <button onClick={()=>this.props.deleteLink(link.id)}>
                                    Delete
                                </button>
                                {
                                    (link.id !== 0) &&
                                    <button onClick={()=>this.props.changeOrder(link.id, 'up')}>
                                        Up
                                    </button>
                                }
                                {
                                    (link.id !== links.length-1) &&
                                    <button onClick={()=>this.props.changeOrder(link.id, 'down')}>
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