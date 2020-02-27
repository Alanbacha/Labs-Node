# Labs - Node.JS

This is an example of an application using NodeJS to make API using model and control concepts.

## Installation

First you need to install [Node.JS](https://nodejs.org/en/download/).

Second, if you want to clone this project using [Git](https://git-scm.com/downloads), you can open you terminal in the folder that you want to create a copy of this project and use this code bellow.

```
git clone https://github.com/Alanbacha/Labs-Node.git
```

Else you can just [download](https://github.com/Alanbacha/Labs-Node/archive/master.zip) it.

## Update your NPM Modules

After you have your project in your computer, using the terminal on the folder that you copied the project, update the NPM modules, using this code bellow.

```
npm update
```

## Configuration
You need to create a file called ".env" in the root of your application, and write te code bellow.

```
MONGO_URI = [TYPE_HERE_YOUR_MONGODB_URI]
PORT = 8080
```

## Run

To run your application, use this code on your terminal

```
npm run dev
```

After that, you can access your API's openning your WebBrowser or using [Postman](https://www.postman.com/downloads/).

## Routes

You can see the routes of the API's in the file bellow.

```
./routes/routes.js
```

In that file, you will see routes for create, list, get, update and delete a Post, for example.

## License

[ISC](https://opensource.org/licenses/ISC)