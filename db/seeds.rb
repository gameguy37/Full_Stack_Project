# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Friendship.destroy_all
Bill.destroy_all
Payment.destroy_all
Comment.destroy_all

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
u11 = User.create(name: 'Trey', email: 'trey@jemprecords.com', password: 'password123')
u12 = User.create(name: 'Page', email: 'page@jemprecords.com', password: 'password123')
u13 = User.create(name: 'Mike', email: 'mike@jemprecords.com', password: 'password123')
u14 = User.create(name: 'Fishman', email: 'fishman@jemprecords.com', password: 'password123')

f1 = Friendship.create(user_id: u1.id, friend_id: u2.id, accepted: false)
f2 = Friendship.create(user_id: u1.id, friend_id: u3.id, accepted: true)
f3 = Friendship.create(user_id: u1.id, friend_id: u4.id, accepted: true)
f4 = Friendship.create(user_id: u1.id, friend_id: u5.id, accepted: true)
f5 = Friendship.create(user_id: u1.id, friend_id: u6.id, accepted: true)
f6 = Friendship.create(user_id: u1.id, friend_id: u7.id, accepted: true)
f7 = Friendship.create(user_id: u0.id, friend_id: u1.id, accepted: false)
f8 = Friendship.create(user_id: u0.id, friend_id: u2.id, accepted: true)
f9 = Friendship.create(user_id: u0.id, friend_id: u3.id, accepted: false)
f10 = Friendship.create(user_id: u0.id, friend_id: u4.id, accepted: true)
f11 = Friendship.create(user_id: u0.id, friend_id: u5.id, accepted: true)
f12 = Friendship.create(user_id: u0.id, friend_id: u6.id, accepted: true)
f13 = Friendship.create(user_id: u0.id, friend_id: u7.id, accepted: false)
f14 = Friendship.create(user_id: u0.id, friend_id: u8.id, accepted: true)
f15 = Friendship.create(user_id: u0.id, friend_id: u9.id, accepted: false)
f16 = Friendship.create(user_id: u0.id, friend_id: u10.id, accepted: true)
f17 = Friendship.create(user_id: u0.id, friend_id: u11.id, accepted: true)
f18 = Friendship.create(user_id: u0.id, friend_id: u12.id, accepted: false)
f19 = Friendship.create(user_id: u0.id, friend_id: u13.id, accepted: false)
f20 = Friendship.create(user_id: u0.id, friend_id: u14.id, accepted: true)

b1 = Bill.create(biller_id: u0.id, category: 'Entertainment: Music', description: 'Tickets to the concert', total_amount: 35.50)
b2 = Bill.create(biller_id: u0.id, category: 'Uncategorized: General', description: 'Candles', total_amount: 519.99)
b3 = Bill.create(biller_id: u0.id, category: 'Home: Electronics', description: 'Plasma TV', total_amount: 200.00)
b4 = Bill.create(biller_id: u0.id, category: 'Uncategorized: General', description: 'Generic expense, split 4 ways', total_amount: 100.00)
b5 = Bill.create(biller_id: u1.id, category: 'Uncategorized: General', description: 'Test expense', total_amount: 3000.00)
b6 = Bill.create(biller_id: u9.id, category: 'Uncategorized: General', description: 'Test expense', total_amount: 11.00)
b7 = Bill.create(biller_id: u10.id, category: 'Uncategorized: General', description: 'Test expense', total_amount: 95.00)
b8 = Bill.create(biller_id: u8.id, category: 'Uncategorized: General', description: 'Test expense', total_amount: 10000.00)
b9 = Bill.create(biller_id: u0.id, category: 'Uncategorized: General', description: 'More testing', total_amount: 100.00)
b10 = Bill.create(biller_id: u1.id, category: 'Uncategorized: General', description: 'Further testing', total_amount: 100.00)
b11 = Bill.create(biller_id: u11.id, category: 'Entertainment: Music', description: '7/27/14 MPP Set 2', total_amount: 45.00)
b12 = Bill.create(biller_id: u12.id, category: 'Entertainment: Music', description: '12/31/13 MSG Set 2', total_amount: 85.00)
b13 = Bill.create(biller_id: u13.id, category: 'Entertainment: Music', description: '7/10/99 CDT', total_amount: 45.00)
b14 = Bill.create(biller_id: u14.id, category: 'Entertainment: Music', description: '7/31/13 Tahoe Tweezer', total_amount: 55.00)


p1 = Payment.create(user_id: u1.id, bill_id: b1.id, initial_amount: 35.50, paid_amount: 10.00)
p2 = Payment.create(user_id: u2.id, bill_id: b2.id, initial_amount: 260.00, paid_amount: 260.00)
p3 = Payment.create(user_id: u3.id, bill_id: b2.id, initial_amount: 259.99, paid_amount: 259.99)
p4 = Payment.create(user_id: u4.id, bill_id: b3.id, initial_amount: 200.00, paid_amount: 0.00)
p5 = Payment.create(user_id: u5.id, bill_id: b4.id, initial_amount: 25.00, paid_amount: 20.00)
p6 = Payment.create(user_id: u6.id, bill_id: b4.id, initial_amount: 25.00, paid_amount: 0.00)
p7 = Payment.create(user_id: u7.id, bill_id: b4.id, initial_amount: 25.00, paid_amount: 0.00)
p8 = Payment.create(user_id: u5.id, bill_id: b5.id, initial_amount: 1000.00, paid_amount: 0.00)
p9 = Payment.create(user_id: u6.id, bill_id: b5.id, initial_amount: 1000.00, paid_amount: 1000.00)
p10 = Payment.create(user_id: u7.id, bill_id: b5.id, initial_amount: 1000.00, paid_amount: 500.00)
p11 = Payment.create(user_id: u0.id, bill_id: b6.id, initial_amount: 11.00, paid_amount: 0.00)
p12 = Payment.create(user_id: u0.id, bill_id: b7.id, initial_amount: 95.00, paid_amount: 0.00)
p13 = Payment.create(user_id: u0.id, bill_id: b8.id, initial_amount: 10000.00, paid_amount: 0.00)
p14 = Payment.create(user_id: u5.id, bill_id: b9.id, initial_amount: 25.00, paid_amount: 0.00)
p15 = Payment.create(user_id: u6.id, bill_id: b9.id, initial_amount: 25.00, paid_amount: 13.00)
p16 = Payment.create(user_id: u7.id, bill_id: b9.id, initial_amount: 25.00, paid_amount: 9.00)
p17 = Payment.create(user_id: u0.id, bill_id: b10.id, initial_amount: 100.00, paid_amount: 30.00)
p18 = Payment.create(user_id: u0.id, bill_id: b11.id, initial_amount: 45.00, paid_amount: 0.00)
p19 = Payment.create(user_id: u0.id, bill_id: b12.id, initial_amount: 85.00, paid_amount: 0.00)
p20 = Payment.create(user_id: u0.id, bill_id: b13.id, initial_amount: 45.00, paid_amount: 0.00)
p21 = Payment.create(user_id: u0.id, bill_id: b14.id, initial_amount: 55.00, paid_amount: 0.00)


c1 = Comment.create(author_id: u1.id, bill_id: b1.id, body: "Thanks for the tickets, buddy!")
c2 = Comment.create(author_id: u0.id, bill_id: b3.id, body: "That is a $200 plasma TV you just killed!!! Good luck paying me back on your zero dollars a year salary plus benefits, babe!")
c3 = Comment.create(author_id: u5.id, bill_id: b4.id, body: "Here's $20 of the $25 I owe")