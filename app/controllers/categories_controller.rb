class CategoriesController < ApplicationController
  before_action :set_category, only: :add_to_post
  # GET /posts
  def index
    @categories = Category.all

    render json: @categories, include: :posts
  end

  # GET /posts/1
  def show
    render json: @category, include: :posts
  end

  def add_to_post
    @post = Post.find(params[:post_id])
    @post.categories << @category
    render json: @post, include: :categories
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_category
    @category = Category.find(params[:id])
  end
end
