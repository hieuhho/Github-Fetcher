const express = require('express');
let app = express();
var bodyParser = require('body-parser');
var github = require('../helpers/github.js');
var db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded());

app.post('/repos', function (req, res) {

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
          link: repo.html_url,
          forks: repo.forks
        }

        repoArr.push(repoObj);
        db.save(repoObj);

      })

      Promise.all(repoArr)
        .then((result) => {
          return db.getRepos()
          .then((results) => {
            res.send(results);
        })
      })

    }
  })
});

app.get('/repos', function (req, res) {
  return db.getRepos()
    .then((results) => {
      res.send(results)
    })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

