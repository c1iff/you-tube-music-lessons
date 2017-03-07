var AllVideos = React.createClass({
  playVidoFromId(id) {
    alert(id)
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
        <div className="row">
          {videos}
        </div>
      </div>
    )
  }
});
