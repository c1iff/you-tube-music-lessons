class Search < ActiveType::Object
  attribute :search_term, :text
  validates :search_term, presence: true

  def get_feed()
    url = "https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&home=true&key=#{ENV['GOOGLE_API_KEY']}"
    begin
      response = HTTParty.get(url)
    rescue HTTP::Error => error
      message = JSON.parse(error)
    end
    results = JSON.parse(response.body)
  end
end
