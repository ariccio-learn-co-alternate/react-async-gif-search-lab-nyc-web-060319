import React from 'react';


class GifSearch extends React.Component {

    state = {
        value: ''
    }

    changeHandler = (event) => {
        console.log(event.target.value);
        this.setState({value: event.target.value});
    }

    submitWrapper = (event) => {
        return this.props.searchSubmitHandler(event, this.state.value);
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.submitWrapper.bind(this)}>
                    <input onChange={this.changeHandler} value={this.state.value}/>
                    <button type="submit">Search</button>
                </form>
            </React.Fragment>
        );
    }
}

export default GifSearch;