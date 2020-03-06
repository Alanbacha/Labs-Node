// Aplication using Node JS, API and MongoDB
// type "npm run dev" in terminal to start the application (this configuration was set in the package.json -> Scripts)

// Setting timeZone
process.env.TZ = "America/New_York";

// Requires
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const dotenv = require("dotenv");

// Requiring the routes whose was cofigured in the file bellow
const postRoutes = require("./routes/routes");

// Setting the port where the application wil run
const port = process.env.PORT || 8080;

dotenv.config();

// Database connection
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log("DB Connected"));
mongoose.connection.on("error", err => console.log(`DB connection error: ${err.message}`));

// middleware
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());

// Using the validator
app.use(expressValidator());

// Using the route
app.use("/", postRoutes);

// Start a listening to the port
app.listen(port, () => {
	console.log(`A Node JS API is listening on port: ${port}`);
});
