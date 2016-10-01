class App extends React.Component {
  constructor(props) {
    super(props);

    this.vids = this.loadVids();

    this.state = {
      currentVid: exampleVideoData[0]
    };
  }

  onVideoClick(video) {
    this.setState({
      currentVid: video
    });
  }

  loadVids() {
    var tempStorage = [];
    this.props.searchYouTube(undefined, function(videos) {
      tempStorage = videos;
    });
    return tempStorage;
  }


  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVid} state={this.state}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.vids} state={this.state} click={this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }
} 


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
