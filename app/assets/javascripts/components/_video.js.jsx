var Video = React.createClass({
  setVideoId() {
    var obj = {};
    obj.playerVideoId = this.props.video.uid
    obj.autoplay = '1'
    console.log('full obj', obj);
    this.props.playVidoFromId(obj);
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
            <p>Published at: {moment(this.props.video.published_at).format('MMMM DD YYYY, h:mm:ss a')}</p>
          </div>
          <button type="button" className="btn btn-danger" onClick={this.setVideoId}><span className="glyphicon glyphicon glyphicon-play"></span></button>
        </div>
      </div>
    )
  }
});
