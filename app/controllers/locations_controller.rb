class LocationsController < ApplicationController
  before_action :set_location, only: :add_to_post
  # GET /posts
  def index
    @locations = Location.all

    render json: @locations, include: :posts
  end

  # GET /posts/1
  def show
    render json: @location, include: :posts
  end

  def add_to_post
    @post = Post.find(params[:post_id])
    @post.locations << @location
    render json: @post, include: :location
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_location
    @location = Location.find(params[:id])
  end
end
