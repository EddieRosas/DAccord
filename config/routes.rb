Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:index, :create, :show, :destroy, :update]
    resources :server_memberships, only: [:create]
    resources :channels, only: [:index, :show, :create, :update, :destroy] do 
      resources :channel_messages, only: [:index, :create, :destroy]
    end
    
    delete 'server_memberships', to: 'server_memberships#leave'
  end
  
  mount ActionCable.server => '/cable'
  root to: "static_pages#root"
end
