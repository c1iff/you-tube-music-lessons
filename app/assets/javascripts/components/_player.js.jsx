var YouTube = React.createClass({
  render() {
    var videoSrc = "http://www.youtube.com/embed/" +
        this.props.video + "?autoplay=" +
        this.props.autoplay + "&rel=" +
        this.props.rel + "&modestbranding=" +
        this.props.modest;
    return (
      <div className="container">
        <iframe className="player" type="text/html" width="640" height="390"
        src={videoSrc}
        frameBorder="0"/>
      </div>
    );
  }
});
