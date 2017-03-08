var AllVideos = React.createClass({
  getInitialState() {
    return {
      playerVideoId: 'wC9QTHv2eQ4',
      autoplay: '1'
    }
  },

  playVidoFromId(obj) {
    this.setState(obj)
  },

  render() {
    var videos = this.props.data.map((video) => {
      return (
        <div key={video.id}>
          <Video video={video} playVidoFromId={this.playVidoFromId} />
        </div>
      )
    });

    return (
      <div>
        <h3>Videos</h3>
        {videos}
      </div>
    )
  }
});
