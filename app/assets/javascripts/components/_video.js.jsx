var Video = React.createClass({
  setVideoId() {
    this.props.playVidoFromId(this.props.video.uid)
  },

  render() {
    src = "https://img.youtube.com/vi/" + this.props.video.uid + "/mqdefault.jpg"
    return (
      <div className="col-md-4">
        <div className="yt_video thumbnail">
          <div>
            <img src={src} />
          </div>
          <div className="caption">
            <h5>{this.props.video.title}</h5>
            <p>{this.props.video.published_at}</p>
          </div>
          <button type="button" className="btn btn-danger" onClick={this.setVideoId}><span className="glyphicon glyphicon glyphicon-play-circle"></span></button>
        </div>
      </div>
    )
  }
});
