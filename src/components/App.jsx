class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playVideo: false
    };
  }

  onVideoClick() {
    this.setState({
      playVideo: !this.state.playVideo
    });
    console.log(this.state);
  }


  render() {

    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={exampleVideoData[1]} state={this.state}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData} state={this.state} click={this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }


} 

/*
(
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer video={exampleVideoData[1]}/>
    </div>
    <div className="col-md-5">
      <VideoList videos={exampleVideoData}/>
    </div>
  </div>
);
*/

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
