# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all
ServerMembership.destroy_all

demo_user = User.create!(
    email: "iamnotarealperson@hotmail.com",
    username: "demoUser",
    password: "password"
)

fake_user = User.create!( 
    email: "otherDemoUser@test.com",
    username: "seededUser1994",
    password: "password"
)

fake_user2 = User.create!(
    email: "lol1@haha.com",
    username: "elloBAUS",
    password: "password"
)

numba4 = User.create!(
    email: "test@haha.com",
    username: "jesbaus",
    password: "password"
)

first_server = Server.create!(name: "First Demo Server", owner_id: demo_user.id)
second_server = Server.create!(name: "Sunshine!", owner_id: demo_user.id)
third_servver = Server.create!(name: "Action Cable Rules", owner_id: fake_user.id)

membership1 = ServerMembership.create!(user_id: demo_user.id, server_id: first_server.id)
membership2 = ServerMembership.create!(user_id: fake_user.id, server_id: first_server.id)
membership3 = ServerMembership.create!(user_id: fake_user.id, server_id: second_server.id)
membership4 = ServerMembership.create!(user_id: demo_user.id, server_id: second_server.id)

channel1 = Channel.create!(name: "general", server_id: first_server.id)
channel2 = Channel.create!(name: "not-general", server_id: first_server.id)
channel3 = Channel.create!(name: "general", server_id: second_server.id)
channel5 = Channel.create!(name: "general", server_id: third_servver.id)

message1 = ChannelMessage.create!(body: "hey everyone! welcome to the server :)", channel_id: channel1.id, author_id: demo_user.id)
message2 = ChannelMessage.create!(body: "this is cool, what did you use to build this app?", channel_id: channel1.id, author_id: fake_user.id)
message3 = ChannelMessage.create!(
    body: "Ruby on Rails and PostgreSQL for the backend, Rails ActionCable for the chat websockets, and React-Redux for the front end :D",
    channel_id: channel1.id, 
    author_id: demo_user.id
)
message4 = ChannelMessage.create!(
    body: "If you hit the green '+' button, you'll be able to either create a server with a unique name, or join another server so long as you are given the server name, case sensitive!", 
    channel_id: channel1.id, 
    author_id: demo_user.id
)
message5 = ChannelMessage.create!(body: "good to know, thanks!", channel_id: channel1.id, author_id: fake_user.id)
message6 = ChannelMessage.create!(
    body: "if you're logged in as the demo user and want to see the live chat in action, you can 
        open up a private browser window (Chrome Incognito, for instance) and then sign in using these credentials:
        \n
        email: otherDemoUser@test.com 
        \n
        password: password
        \n
        \n
        Make sure you're on the same channel of the same server and you can see the websockets sending the messages live in action :)",
    channel_id: channel1.id,
    author_id: demo_user.id
)
