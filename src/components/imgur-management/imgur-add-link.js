import React from 'react';

class ImgurAddLink extends React.Component {
    state = {
        title: ''
    }
    handleChange = (event) => {
        this.setState({ title: event.target.value.trim() });
    }
    handleSubmit= (event) => {
        event.preventDefault();
        this.props.addNewLink(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.title}
                        placeholder='Paste/Enter an imgur link here.'
                        onChange={this.handleChange}
                        autoFocus
                    />
                    <button
                        type="submit"
                        onClick={this.handleSubmit}
                    >
                        Add
                    </button>
                </form>
            </div>
        )
    }
}

export default ImgurAddLink;