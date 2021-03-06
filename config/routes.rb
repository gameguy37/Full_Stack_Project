Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
    resources :friendships, only: [:create, :destroy]
    resources :bills, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:index, :create, :destroy]
    resources :payments, only: [:index, :update, :destroy]
  end

end
