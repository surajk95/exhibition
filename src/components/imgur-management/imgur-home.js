import React from 'react';

import ImgurAddLink from './imgur-add-link.js';
import ImgurShowLinks from './imgur-show-links.js';

class ImgurHome extends React.Component {
    state = {
        links: [],

    }

    addNewLink = (link) => {
        let links = [...this.state.links, link];
        this.setState({ links });
    }

    render() {
        return (
            <div>
                <ImgurAddLink addNewLink={this.addNewLink} />
                <ImgurShowLinks links={this.state.links} />
            </div>
        )
    }
}

export default ImgurHome;