Tasks
------

###Client

- [ ] Clean client drawing code in the app/js folder
- [ ] Create js object to manage the ajax call to the server
- [ ] Create an ajax call to create the game in the server 
- [ ] Create the user dashboard UI jade template or angularUI to manage the user interface
  - [ ] Create the login form in the user dashboard
    - [ ] Create user
    - [ ] Edit user
  - [ ] Add button (image, list or whatever) to create game in the user dashboard
  - [ ] Add a list of the current games in the dashboard
  - [ ] Add a button to see a list of completed games in the user dashboard
  
###Server

- [ ] Create route for the User creation
  - [ ] Create the helper for the add user operation
  - [ ] Create the helper for the edit user operation
  - [ ] Create the request POST in the routes for the user edit 
  - [ ] Create the request POST in the routes for the user add
- [ ] Create route for the Game creation
  - [x] Create the helper to get the token, and create the game
  - [x] Create the request GET to get the board
  - [ ] Create the POST generate figure operation
  - [ ] Create the POST move figure operation
- [ ] Create route for the current game listing
  - [ ] Create the helper to get the the listing of games from the db by user
  - [ ] Create the request GET for the games listing in the routes
- [ ] Create route for the completed game listing (this can be similar to the previous one)
  - [ ] Create the helper to get the the listing of completed games from the db by user
  - [ ] Create the request GET for the games listing in the routes
