class Feed

  def get_feed(user)
    url = "https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&home=true&key=#{ENV['GOOGLE_API_KEY']}"
    headers = {'authorization' => 'Bearer '+ user.token}
    begin
      response = HTTParty.get(url, :headers => headers)
    rescue HTTP::Error => error
      message = JSON.parse(error)
    end
    results = JSON.parse(response.body)
  end
end
