class CustomerController < ApplicationController
  def index
    # Rails.logger.info params["q"]

    if params.include?("q")
      query = "#{params["q"].downcase}%"
      @customers = Customer.where("first_name LIKE ? OR last_name LIKE ?", query, query)
    else
      @customers = Customer.all
    end

    render json: @customers
  end

  # def create
  #   Customer.new(params[:first_name], params[:last_name])
  # end
end
