class VideosController < ApplicationController
  def index
    @search = Search.new
    @videos = Video.order('created_at DESC')
  end

  def new
    @video = Video.new
  end

  def create
    byebug
    @video = Video.new(video_params)
    if @video.save
     flash[:success] = 'Video added!'
     redirect_to root_url
    else
     render :new
    end
  end

  def update
    @video = Video.find(params[:id])
    respond_to do |format|
      if @video.update(category: params[:category])
        # format.html { redirect_to 'root', notice: 'Video was successfully updated.' }
        format.json { render json: @video }
      else
        format.html { render :edit }
        format.json { render json: @video.errors, status: :unprocessable_entity }
      end
    end
  end

private

  def video_params
    params.require(:video).permit(:id, :link, :category)
  end
end
