# MiniTwitter
 A simple api that has users and posts
 
 I have created the code base with the necessary npm packages. I have also set up the server. To start the server, go to your projects directory in your terminal. type: "npm run devStart".
 
 *TODO*
 
 * create your own branch on git and call it your name
 * connect app to monogodb using mongoose.
 * add model files for user and post in the model file. 
   * user schema should have: username, email, password
   * post schema should have: title, user_id.
 * add the file routes in your app.js
 * CRUD functionality for your users. User can signup, login, view his details and delete his account.
   * for this task user route file will have four endpoints: "/signup", "login", "/details", "delete". Use the applicable HTTP requests: POST, GET, PUT,PATCH, DELETE 
   * only the update and delete endpoint will have the webToken middleware to check if the user is "logged in". The user must provide a token. hint: google jwt. node middleware. req headers
  * CRUD for your posts:
    *  Middleware to check user is logged in
    *  user can create, read all posts, read a particular post, update a post and delete a post.
    
     
    
