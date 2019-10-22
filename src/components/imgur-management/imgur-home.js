import React from 'react';
import { connect } from 'react-redux';

import ImgurAddLink from './imgur-add-link.js';
import ImgurShowLinks from './imgur-show-links.js';

import { fetchState, updateState } from './imgur-actions.js';

class ImgurHome extends React.Component {
    state = {
        links: [],

    }

    componentDidMount() {
        this.props.fetchState();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ links: nextProps.links });
    }

    addNewLink = (title) => {
        let { links } = this.state;
        let link = {
            title,
            id: 0,
        }
        links = links.map(item => ({...item, id: item.id+1}));
        links.unshift(link);
        //this.setState({ links });
        this.props.updateState(links);
    }

    deleteLink = (id) => {
        let { links } = this.state;
        links = links.filter(item => item.id !== id)
                .map(item => item.id>id ? {...item, id:item.id-1} : item);
        //this.setState({ links });
        this.props.updateState(links);
    }

    changeOrder = (id, direction) => {
        let { links } = this.state;
        for(let i=0; i<links.length; i++) {
            if(links[i].id === id) {
                let swapper = direction === 'up' ? links[i-1] : links[i+1];
                //swap item and swapper
                let temp = swapper.title;
                swapper.title = links[i].title;
                links[i].title = temp;
                //this.setState({ links });
                this.props.updateState(links);
                return;
            }
        }
    }

    render() {
        return (
            <div>
                <ImgurAddLink addNewLink={this.addNewLink} />
                <ImgurShowLinks
                    links={this.state.links}
                    deleteLink={this.deleteLink}
                    changeOrder={this.changeOrder}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {
        ImgurReducer: {
            links
        }
     } = state;
    return {
       links
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateState : (data) => dispatch(updateState(data)),
        fetchState: () => dispatch(fetchState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImgurHome);