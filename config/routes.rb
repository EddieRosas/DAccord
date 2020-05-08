Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :create, :show, :destroy, :update]
    resources :server_memberships, only: [:create]
    resources :channels, only: [:show, :create, :update, :destroy]


    delete 'server_memberships', to: 'server_memberships#leave'
  end
end
