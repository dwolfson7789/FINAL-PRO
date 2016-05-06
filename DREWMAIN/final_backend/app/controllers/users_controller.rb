# class UsersController < ApplicationController
#   def index
#     @users = User.all
#   end
# end
#
# -----
#

class UsersController < ApplicationController

  # Get All
  def index
    @users = User.all
  end

  # GET one product
  def show
    @users = User.find(params[:id])
  end


  # POST to create a product
  def create
    @user = User.new(
    name:params[:name],
    email:params[:email]
    )

    if @user.save
      # Is rendering to a json files with 3 method, formats, handlers and status.
      render 'show', formats: [:json], handlers: [:jbuilder], status: 201
    else
      render json: {error: "Product could not be created"}, status: 422
    end
  end

  # UPDATE a product
  def update
    if @user.update_attributes(
      name:params[:name],
      email:params[:email]
      )

      render 'show', formats: [:json], handlers: [:jbuilder], status: 200
    else
      render json: { error: "Story could not be updated." }, status: 422
    end
  end

  # Something Happen
  private
  def find_product
    @user = User.find(params[:id])
  end

  # DELETE the id #
  def destroy
    @user = User.find(params[:id])

    if @user.destroy
      render json: {}, status: 200
    else
      render json: { error: "Story could not be deleted." }, status: 422
    end
  end

end
