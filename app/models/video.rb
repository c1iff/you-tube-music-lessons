class Video < ApplicationRecord
  YT_LINK_FORMAT = /\A.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/i

  validates :link, presence: true, format: YT_LINK_FORMAT

  before_create :check_video

  belongs_to :user

  def check_video()
    video = Yt::Video.new url: self.link
    self.uid = video.id
    self.title = video.title
    self.likes = video.like_count
    self.dislikes = video.dislike_count
    self.published_at = video.published_at
  rescue Yt::Errors::NoItems
    self.title = ''
  end
end
