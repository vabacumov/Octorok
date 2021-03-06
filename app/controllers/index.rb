get '/' do
  erb :index
end

post '/users' do
  user = User.new(first_name: params[:first_name],
                    last_name: params[:last_name],
                    username: params[:username],
                    email: params[:email])
  user.password = params[:password_hash]

  if user.save
    session[:email]=user.email
    session[:id]=user.id
    redirect '/'
  else
    @errors = user.errors.full_messages
    erb :sign_up
  end
end

get '/users/new' do
  erb :sign_up
end

get '/users/sign_in' do
  erb :sign_in
end

post '/users/sign_in' do
  user = User.find_by_email(params[:email])
  if user
    session[:email]=user.email
    session[:id]=user.id
    redirect '/'
  else
    @error="Login Failed"
    erb :sign_in
  end

end

get '/sign_out' do
  session.clear
  redirect '/'
end

get '/users/:id' do
  if current_user
    user = User.find(session[:id])
    content_type :json
    return {username: user.username}.to_json
  end
end

get '/frogger_1' do
  erb :frogger_1, layout: false
end

get '/frogger_2' do
  erb :frogger_2
end

get '/battles' do
  erb :battles
end

get '/dodge_ian' do
  erb :dodgeIan
end
