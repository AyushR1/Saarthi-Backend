import express from 'express';
import mongoose from 'mongoose';

//connect mongodb
mongoose.connect(process.env.MONGODB_URI).then(() =>{
    console.log("Connected to DB");
}).catch((error) => {
    console.log(error.message);
});

//Creates an instance of an Express application.
const app = express();

//line creates a constant called port that is either the value of the PORT environment variable (if it exists) or 5000.
const port = process.env.PORT || 5000;

//The app.listen method is called with port as the first argument and a callback function as the second argument. This starts a HTTP server that listens for incoming requests on the specified port and executes the callback function when a request is received The callback function logs a message to the console indicating that the server is running at http://localhost:${port}.
app.listen(port, () => {
    console.log(`Serve at: http://localhost:${port}`);
});