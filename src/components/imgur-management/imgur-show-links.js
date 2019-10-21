import React from 'react';

class ImgurShowLinks extends React.Component {
    render() {
        const { links } = this.props;

        return (
            <div>
                {
                    (links && links.length>0) &&
                    links.map((link, index) => {
                        return (
                            <div key={index}>
                                {link}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ImgurShowLinks;