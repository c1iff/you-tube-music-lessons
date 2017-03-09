var Video = React.createClass({
  setVideoId() {
    player.loadVideoById(this.props.video.uid)
  },

  updateCategory(category) {

    this.props.handleUpdate({id: this.props.video.id, category: category, link: this.props.video.link})
  },

  render() {
    src = "https://img.youtube.com/vi/" + this.props.video.uid + "/mqdefault.jpg"
    return (
      <div className="col-md-6 nopadding">

        <div className="yt_video">
          <div className="thumbnail-container">
            <div className="pic" onClick={this.setVideoId}>
              <img src={src} className="index-picture" />
            </div>
            <div className="play" onClick={this.setVideoId}>
              <img src="http://www.curemedia.se/wp-content/uploads/2016/03/youtube-icon-block-png-17-60x60.png" />
            </div>
          </div>
          <div className="caption">
            <h5>{this.props.video.title}</h5>
            <p>Published at: {moment(this.props.video.published_at).format('MMMM DD YYYY, h:mm:ss a')}</p>
            <p>Category: {this.props.video.category}</p>
          </div>
          <button type="button" className="btn btn-default" onClick={this.updateCategory.bind(this, 'song')}>Song</button>
          <button type="button" className="btn btn-default" onClick={this.updateCategory.bind(this, 'technique')}>Technique</button>
          <button type="button" className="btn btn-default" onClick={this.updateCategory.bind(this, 'gear')}>Gear</button>
          <button type="button" className="btn btn-default" onClick={this.props.handleDelete}>Delete</button>
        </div>
      </div>
    )
  }
});
