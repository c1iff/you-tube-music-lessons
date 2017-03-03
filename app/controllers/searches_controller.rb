class SearchesController < ApplicationController
  def index

  end

  def new
    @search = Search.new
  end

  def create
    @search = Search.new(search_term: params[:search][:search_term])
   if @search.save
    @results = @search.get_results(params[:search][:search_term])
      if @results['error']
        flash[:error] = 'There was an error while performing your search...'
      end

      respond_to do |format|
        format.html {}
        format.js { render 'new' }
      end
    else
      redirect_to new_search_path
    end
  end

end
