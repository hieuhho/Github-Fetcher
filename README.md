# fullstack-review
This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project was worked on independently.

This app allow users to input a GitHub username and check their repositories' popularity against other GitHub users in the database.

This app was created using React to interact with a RESTful API powered by Node.js using an Express server and a MongoDB database.

## Preview

A deployed version of the project can be found [here](https://hieus-repos-fetcher.herokuapp.com/).

## Goals

* Build a full-stack app from near-scratch
* Fetch data from GitHub API
* Store data in a MongoDB database
* Display the data on the app's main page

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
node 12.16.1
MongoDB 4.2
```

### Installing

```
npm install
```

To install MongoDB, please follow these [instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

### Start Server

```
npm start
```

### Start Webpack

```
npm run react-dev
```

## Built With

* [node.js](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [MongoDB](https://www.mongodb.com/)


## Deployment

This app uses the GitHub API. Please create a `config.js` and export your Github token as follow

```
module.exports = {
  TOKEN: "your_github_token"
}
```
This app was deployed using [Heroku](https://dashboard.heroku.com/).

## Authors

* **Hieu Ho** - *Initial work* - [hieuhho](https://github.com/hieuhho)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

This project would not have been possible without all the support and encouragement from:

* Family and friends
* HackReactor
