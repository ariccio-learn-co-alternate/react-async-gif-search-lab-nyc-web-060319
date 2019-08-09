import React from 'react';
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

const URL = "http://api.giphy.com/v1/gifs/search";
const API_KEY = "api_key=dc6zaTOxFJmzC&rating=g"



class GifListContainer extends React.Component {

    state = {
        data: null
    }
    async componentDidMount() {
        // const resp = await fetch(`${URL}?q=dogs${API_KEY}`);
        // const parsed = await resp.json();
        // this.setState({data: await parsed});
    }

    searchSubmitHandler = (event, value) => {
        // console.log(event.target);
        event.preventDefault();
        fetch(`${URL}?q=${value}&${API_KEY}`)
            .then(resp => {
                console.log(resp);
                return resp.json();
            })
            .then(parsed => {
                console.log(parsed);
                this.setState({data: parsed})
            })
    }

    render() {
        return (
            <React.Fragment>
                <GifList gifs={this.state.data}/>
                <br/>
                <GifSearch searchSubmitHandler={this.searchSubmitHandler}/>
            </React.Fragment>
        );
    }
}

export default GifListContainer;