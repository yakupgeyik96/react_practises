import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = {
        images : []
    };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
                params: { query: term }
            });

        this.setState({ images : response.data.results });
        
        /********************* OR ********************************/

        /* .then((response) => {
            if (response.status === 200) {
                console.log("Searching successfull");
                console.log(response.data.results);
            } else if (response.status === 401) {
                console.log("Authorization error");
            }
        }); */
    }

    render() {
        return (
            <div className = "ui container" style={{marginTop: '1rem'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images = {this.state.images} />
            </div>
        );
    }
};

export default App;