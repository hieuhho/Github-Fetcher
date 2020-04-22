const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, page = 1, callback) => {

  let options = {
    url: `https://api.github.com/users/${username}/repos?page=${page}&per_page=100`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.TOKEN}`
    }
  };

  request.get(options, (err, res, body) => {

    body = JSON.parse(body);

    if (err) {
      console.log("FAILED TO REQUEST GET REPO! ", err)
      callback(err, null);
    } else if (body.message) {
      console.log(`${username} ${body.message}`);
      callback(err, null);
    } else if (body.length === 100) {
      getReposByUsername(username, page + 1, (err, res) => {
        body = body.concat(res)
        callback(null, body)
      });
    } else {
      callback(null, body)
    }
  });

}

module.exports.getReposByUsername = getReposByUsername;