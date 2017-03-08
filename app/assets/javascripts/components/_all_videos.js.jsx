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
      <div className="container">
        <div id="player">
          <YouTube video="GF60Iuh643I" autoplay="0" rel="0" modest="1" />
        </div>
        <div className="row">
          {videos}
        </div>
      </div>
    )
  }
});
