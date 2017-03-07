var AllVideos = React.createClass({
  render() {
    var videos = this.props.data.map((video) => {
      return (
        <div key={video.id}>
          <Video video={video} />
        </div>
      )
    });

    return (
      <div>
        {videos}
      </div>
    )
  }
});
