class Search < ActiveType::Object
  attribute :search_term, :text
  validates :search_term, presence: true

  def get_results(search_term)
    url = "https://content.googleapis.com/youtube/v3/search?maxResults=6&part=snippet&q=#{search_term}&key=#{ENV['GOOGLE_API_KEY']}"
    begin
      response = HTTParty.get(url)
    rescue HTTP::Error => error
      message = JSON.parse(error)
    end
    results = JSON.parse(response.body)
  end
end
