# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u0 = User.create(name: 'Demo User', email: 'placeholder@gmail.com', password: 'password123')
u1 = User.create(name: 'Tim Thompson', email: 'timthompson@gmail.com', password: 'password123')
u2 = User.create(name: 'Jim Johnson', email: 'jimjohnson@gmail.com', password: 'password123')
u3 = User.create(name: 'Bill B.', email: 'bill@hotmail.com', password: 'password123')
u4 = User.create(name: 'Gary S.', email: 'garysquarepants@gmail.com', password: 'password123')
u5 = User.create(name: 'Colonel Forbin', email: 'cactus555@gmail.com', password: 'password123')
u6 = User.create(name: 'Tela', email: 'rebel@gamehendge.com', password: 'password123')
u7 = User.create(name: 'Rutherford the Brave', email: 'head-knight@gamehendge.com', password: 'password123')
u8 = User.create(name: 'Mr. Palmer', email: 'accountant@gamehendge.com', password: 'password123')
u9 = User.create(name: 'Wilson', email: 'king_of_prussia@gamehendge.com', password: 'password123')
u10 = User.create(name: 'The Sloth', email: 'hitman@gamehendge.com', password: 'password123')

f1 = Friendship.create(user_id: u1.id, friend_id: u2.id, accepted: false)
f2 = Friendship.create(user_id: u1.id, friend_id: u3.id, accepted: true)
f3 = Friendship.create(user_id: u1.id, friend_id: u4.id, accepted: true)
f4 = Friendship.create(user_id: u1.id, friend_id: u5.id, accepted: true)
f5 = Friendship.create(user_id: u1.id, friend_id: u6.id, accepted: true)
f6 = Friendship.create(user_id: u1.id, friend_id: u7.id, accepted: true)
f7 = Friendship.create(user_id: u0.id, friend_id: u3.id, accepted: false)
f8 = Friendship.create(user_id: u0.id, friend_id: u5.id, accepted: true)
f9 = Friendship.create(user_id: u0.id, friend_id: u6.id, accepted: false)
f10 = Friendship.create(user_id: u0.id, friend_id: u8.id, accepted: true)
f11 = Friendship.create(user_id: u0.id, friend_id: u9.id, accepted: true)
f12 = Friendship.create(user_id: u0.id, friend_id: u10.id, accepted: true)
