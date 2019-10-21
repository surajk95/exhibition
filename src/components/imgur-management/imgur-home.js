import React from 'react';

import ImgurAddLink from './imgur-add-link.js';
import ImgurShowLinks from './imgur-show-links.js';

class ImgurHome extends React.Component {
    render() {
        return (
            <div>
                <ImgurAddLink />
                <ImgurShowLinks />
            </div>
        )
    }
}

export default ImgurHome;