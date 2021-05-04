# Frontend Authentication System with OTP

This project creates an authentication system for a mock web application using
ReactJS and tests it against a mock API created using ExpressJS.

## Testing the Authentication System:

Go to the directory in which you want to test this, and then:

### Clone the repository

Type `git clone` and paste the link of the repository:

```git clone https://github.com/ProgrammerFahim/auth-xenworks.git```

and then `cd` into the repository.

### Fire up the Express mock API server

Run 

```node server.js```

in a terminal window to get the server running. The file `server.js` contains the skeleton of
a mock API. You will notice some of routes send information that make the authentication
process succeed, and others send information that raises errors. The complementary actions are
commented out, and you can uncomment/comment relevant parts to change the action of the mock 
server. 

So, if you want `signup` to fail, go to the route for `signup`, uncomment the failing response
and comment out the working response. After that, you will need to kill the server and restart 
it again.

### `npm start`

Now, in another terminal whose current working directory is the directory you cloned the 
repository to, run `npm start`. This will host the application at `localhost:3000`.

### Deleting session information

Because of the use of `localStorage` to implement persistent token management, reusing the app
multiple times would require erasing the stored token given after signing in or registering. In
order to do this, simply open up the developer tools, and in the console, execute 
`localStorage.clear()`. This will delete the locally stored token, and then reloading the app
will get you back to an unlogged state.
