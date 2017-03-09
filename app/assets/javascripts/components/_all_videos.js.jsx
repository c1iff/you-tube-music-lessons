var AllVideos = React.createClass({
  getInitialState() {
    return {
      videos: this.props.data,
    }
  },

  playVidoFromId(obj) {
    this.setState(obj)
  },

  handleUpdate(video) {
    $.ajax({
      url: `/videos/${video.id}`,
      type: 'PUT',
      data: { category: video.category,
              link: video.link,
              id: video.id},
      success: () => {
        this.updateVideos(video);
      }
    });
  },

  updateVideos(video) {
    videoIndex = 0;
    videoBeforeUpdate = {};
    var videos = this.state.videos.filter((s, index) => {
      if (s.id == video.id) {
        videoBeforeUpdate = s;
        videoBeforeUpdate.category = video.category
        videoIndex = index;
      }
      return s.id != video.id
    });
    videos.splice(videoIndex, 0, videoBeforeUpdate);

    this.setState({ videos: videos })
  },

  render() {
    var videos = this.state.videos.map((video, index) => {
      return (
        <div key={video.id}>
          <Video video={video} playVidoFromId={this.playVidoFromId} handleUpdate={this.handleUpdate} />
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
