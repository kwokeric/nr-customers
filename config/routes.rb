Rails.application.routes.draw do
  resources :customer, only: [:index]
  # get 'search/index'

  # get 'customer/index'
  #
  # get 'home/index'
  # get 'home/timestamp'

  # get '*path', to: 'home#index', via: :all
  root 'home#index'
end
