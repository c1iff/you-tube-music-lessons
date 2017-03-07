var Video = React.createClass({
  render() {
    src = "https://img.youtube.com/vi/" + this.props.video.uid + "/mqdefault.jpg"
    return (
      <div class="yt_video thumbnail">
        <p>{this.props.video.title}</p>
        <p>{this.props.video.uid}</p>
        <div>
          <img src={src} />
        </div>
      </div>
    )
  }
});
