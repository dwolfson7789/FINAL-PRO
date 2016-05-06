# class SitchesController < ApplicationController
#   def index
#     @sitches = Sitch.all
#   end
# end
# ------
#
class SitchesController < ApplicationController

  # Get All
  def index
    @sitches = Sitch.all
  end

  # GET one product
  def show
    @sitches = Sitch.find(params[:id])
  end


  # POST to create a product
  def create
    @sitch = Sitch.new(
    name:params[:name],
    venue_type:params[:venue_type],
    neighborhood:params[:neighborhood],
    wait_time:params[:wait_time],
    description:params[:description],
    latitude:params[:latitude],
    longitude:params[:longitude],
    address:params[:address],
    website:params[:website],
    marker_symbol:params[:marker_symbol]
    )

    if @sitch.save
      # Is rendering to a json files with 3 method, formats, handlers and status.
      render 'show', formats: [:json], handlers: [:jbuilder], status: 201
    else
      render json: {error: "Product could not be created"}, status: 422
    end
  end

  # UPDATE a product
  def update
    if @sitch.update_attributes(
      name:params[:name],
      venue_type:params[:venue_type],
      neighborhood:params[:neighborhood],
      wait_time:params[:wait_time],
      description:params[:description],
      latitude:params[:latitude],
      longitude:params[:longitude],
      address:params[:address],
      website:params[:website],
      marker_symbol:params[:marker_symbol]
      )

      render 'show', formats: [:json], handlers: [:jbuilder], status: 200
    else
      render json: { error: "Story could not be updated." }, status: 422
    end
  end

  # Something Happen
  private
  def find_product
    @sitch = Sitch.find(params[:id])
  end

  # DELETE the id #
  def destroy
    @sitch = Sitch.find(params[:id])

    if @sitch.destroy
      render json: {}, status: 200
    else
      render json: { error: "Story could not be deleted." }, status: 422
    end
  end

end
