import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {

    state = { videos : [] };

    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params : {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: 'AIzaSyBBmxaVaj4oRIMlgcJJoeMVZfi67XLqMgw'
            }
        });

        this.setState({ videos : response.data.items });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <h2>I have {this.state.videos.length} videos</h2>
            </div>
        );
    }
}

export default App;