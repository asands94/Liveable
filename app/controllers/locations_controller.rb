class LocationsController < ApplicationController

  # GET /locations
  def index
    @locations = Location.all

    render json: @locations, include: :posts
  end

  # GET /locations/1
  def show
    render json: @location, include: :posts
  end


  private

end
