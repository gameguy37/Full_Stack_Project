## README

# Welcome to goDutch

goDutch is designed to be a clone of the expense-tracking website Splitwise. goDutch is a free tool for friends and roommates to track bills, IOUs, and other shared expenses so that everyone gets paid back. In addition to tracking specific expenses between a user and individual friends, goDutch is capable of aggregating all that data and providing an overview to let you know whether you are in debt to others or if you have money coming your way!

[Take me to goDutch!](https://godutch-app.herokuapp.com)

goDutch was built with the following technologies:
* Ruby on Rails - to create a database, manage relationships between data types, and handle creation/deletion of records and associations (backend)
** Ruby v.XX.XX.XX
** Rails v.XX.XX.XX
* Javascript and React/Redux - to manage user input, send requests to the backend for addition/deletion of database records, and update the page display to reflect those changes (frontend)
** Node.js v.XX.XX.XX
** React v.XX.XX.XX
** Redux v.XX.XX.XX

# Features

### User Authentication
* Users can create an account or sign in to an existing account
* Users can use a demo login to try the site before registering

### Friends
* Users can add any other existing users as friends with whom to split expenses
* Users can view a list of their friends
* Users can delete friends

### Bills
* Users can create a record of an expense and select friends with whom to split that expense
* When creating an expense, a user can choose to either include themselves when calculating IOUs or indicate that the entire cost must be paid back to them

### Dashboard
* Users have a landing page which shows any outstanding balances between themselves and each of their friends
* A running total at the top of the page indicates (overall) whether the user is owed money or must pay out money in order to settle up with friends

### Transaction History
* Navigating to the page of one specific friend shows a transaction history of all expenses that include both the user and that friend
* Items in the transaction history indicate the total original bill amount before splitting as well as the outstanding balance owed to the person that paid the bill
** This outstanding balance reflects any partial payments that may have been made toward settling up
