class VideosController < ApplicationController
  def index
    @search = Search.new
    @videos = Video.order('created_at DESC')
  end

  def new
    @video = Video.new
  end

  def create
    @video = Video.new(video_params)
    if @video.save
     flash[:success] = 'Video added!'
     redirect_to root_url
    else
     render :new
    end
  end

  def update
    @video = Video.new(video_params)
    respond_to do |format|
      if @video.update(contact_params)
        format.html { redirect_to @contact, notice: 'Contact was successfully updated.' }
        format.json { render :show, status: :ok, location: @contact }
      else
        format.html { render :edit }
        format.json { render json: @contact.errors, status: :unprocessable_entity }
      end
    end
  end

private

  def video_params
    params.require(:video).permit(:link)
  end
end
