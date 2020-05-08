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
    username: "yisBaus",
    password: "password"
)

fake_user = User.create!( 
    email: "lol@haha.com",
    username: "haiMOM",
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

first_server = Server.create!(name: "cheeky cheese", owner_id: demo_user.id)
second_server = Server.create!(name: "HAIII", owner_id: demo_user.id)
third_servver = Server.create!(name: "joinThisOne", owner_id: fake_user.id)

membership1 = ServerMembership.create!(user_id: demo_user.id, server_id: first_server.id)
membership2 = ServerMembership.create!(user_id: fake_user.id, server_id: first_server.id)
membership3 = ServerMembership.create!(user_id: fake_user.id, server_id: second_server.id)
membership4 = ServerMembership.create!(user_id: demo_user.id, server_id: second_server.id)

channel1 = Channel.create!(name: "general", server_id: first_server.id)
channel2 = Channel.create!(name: "second-channel", server_id: first_server.id)
channel3 = Channel.create!(name: "general", server_id: second_server.id)
channel5 = Channel.create!(name: "general", server_id: third_servver.id)
