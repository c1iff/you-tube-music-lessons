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
          <div className='radio'>
            <label className="radio-inline">
              <input type="radio" name={this.props.video.id} id="inlineRadio1" value="option1" onClick={this.updateCategory.bind(this, 'song')} /> Song
            </label>
            <label className="radio-inline">
              <input type="radio" name={this.props.video.id} id="inlineRadio2" value="option2" onClick={this.updateCategory.bind(this, 'technique')} /> Technique
            </label>
            <label className="radio-inline">
              <input type="radio" name={this.props.video.id} id="inlineRadio3" value="option3" onClick={this.updateCategory.bind(this, 'gear')} /> Gear
            </label>
          </div>


          <button type="button" className="btn btn-danger button-right" onClick={this.props.handleDelete}><span className="glyphicon glyphicon glyphicon-trash"></span></button>
        </div>
      </div>
    )
  }
});
