class VideosController < ApplicationController
  def index
    @user = User.find(current_user.id)
    @search = Search.new
    @videos = @user.videos.order('created_at DESC')
  end

  def new
    @video = Video.new
  end

  def create
    @video = Video.new(video_params)
    @video.user_id = current_user.id
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
        format.json { render json: @video }
      else
        format.json { render json: @video.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    respond_to do |format|
      if Video.destroy(params[:id])
        format.json { render json: @video }
      else
        format.json { render json: @video.errors, status: :unprocessable_entity }
      end
    end
  end

private

  def video_params
    params.require(:video).permit(:id, :link, :category)
  end
end
