const express = require('express');
let app = express();
var bodyParser = require('body-parser');
var github = require('../helpers/github.js');
var db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(`POST in Server ${JSON.stringify(req.body.search)}`)
  let user = req.body.search;
  github.getReposByUsername(user, (err, repos) => {
    let repoArr = [];
    if (err) {
      console.error('APP POST ERROR', err);
    } else {

      let parsed = JSON.parse(repos)

      parsed.forEach((repo) => {
        let repoObj = {
          username: repo.owner.login,
          repoName: repo.name,
          repoID: repo.id,
          forks: repo.forks
        }
        repoArr.push(repoObj);
        db.save(repoObj);
      })

      //store in db  -> repoarr
      //run (get)(?)
      //send back top 25
      res.send(repoArr);
    }
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.getRepos((results) => {
    console.log('results: ', results);
    res.send(results);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

