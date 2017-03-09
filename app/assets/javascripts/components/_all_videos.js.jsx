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

  handleDelete(id) {
    $.ajax({
      url: `/videos/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeVideoFromDOM(id);
      }
    });
  },

  removeVideoFromDOM(id) {
    var newVideos = this.state.videos.filter((video) => {
      return video.id != id;
    });
    this.setState({ videos: newVideos })
  },

  getVideoHtml(videos) {
    var videosWithHtml = videos.map((video, index) => {
      return (
        <div key={video.id}>
          <Video video={video} playVidoFromId={this.playVidoFromId} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete.bind(this, video.id)} />
        </div>
      )
    });
    return videosWithHtml
  },

  filterVideoByCategory(videos, category) {
    var filteredVideos = videos.filter((s, index) => {
      return s.category == category;
    });
    return filteredVideos
  },

  render() {
    var videos = this.getVideoHtml(this.state.videos);
    var songVideos = this.getVideoHtml(this.filterVideoByCategory(this.state.videos, 'song'));
    var techniqueVideos = this.getVideoHtml(this.filterVideoByCategory(this.state.videos, 'technique'));
    var gearVideos = this.getVideoHtml(this.filterVideoByCategory(this.state.videos, 'gear'));

    return (
      <div className="tab-content">
        <div id="home" className="tab-pane fade in active">
          {videos}
        </div>
        <div id="menu1" className="tab-pane fade">
          {songVideos}
        </div>
        <div id="menu2" className="tab-pane fade">
          {techniqueVideos}
        </div>
        <div id="menu3" className="tab-pane fade">
          {gearVideos}
        </div>
      </div>
    )
  }
});
