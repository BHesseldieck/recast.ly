class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVid: exampleVideoData[0],
      videos: exampleVideoData
    };
  }

  onVideoClick(video) {
    this.setState({
      currentVid: video
    });
  }


  componentWillMount() {
    this.props.searchYouTube(undefined, function(videos) {
      this.setState({
        currentVid: videos[0],
        videos: videos
      });
    }.bind(this));
  }


  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVid} state={this.state}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} state={this.state} click={this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }
} 


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
