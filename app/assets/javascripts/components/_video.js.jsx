var Video = React.createClass({
  setVideoId() {
    player.loadVideoById(this.props.video.uid)
  },

  render() {
    src = "https://img.youtube.com/vi/" + this.props.video.uid + "/mqdefault.jpg"
    return (
      <div className="col-md-6">
        <div className="yt_video">
            <img src={src} />    
          <div className="caption">
            <h5>{this.props.video.title}</h5>
            <p>Published at: {moment(this.props.video.published_at).format('MMMM DD YYYY, h:mm:ss a')}</p>
          </div>
          <button type="button" className="btn btn-danger" onClick={this.setVideoId}><span className="glyphicon glyphicon glyphicon-play"></span></button>
        </div>
      </div>
    )
  }
});
