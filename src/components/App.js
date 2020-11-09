import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../components/apis/youtube";
import VideosList from "./VideosList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: res.data.items, selectedVideo: null });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />

        {!this.state.selectedVideo ? (
          <VideosList
            videos={this.state.videos}
            onVideoSelect={this.onVideoSelect}
          />
        ) : (
          <div className="ui grid">
            <div className="ui row">
              <div className="ten wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="six wide column">
                <VideosList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
