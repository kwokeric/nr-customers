Rails.application.routes.draw do
  resources :customer, only: [:index]
end
