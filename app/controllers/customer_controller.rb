class CustomerController < ApplicationController
  def index
    Rails.logger.info params["name"]

    if params.include?("q")
      query = "#{params["q"].downcase}%"
      result = Customer.where("first_name LIKE ? OR last_name LIKE ?", query, query)
    else
      result = Customer.all
    end

    render json: result
  end

  # def create
  #   Customer.new(params[:first_name], params[:last_name])
  # end
end
