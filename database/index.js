const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: String,
  repoName: String,
  repoID: {type: Number, unique: true},
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let myRepo = new Repo({
    username: repos.owner.login,
    repoName: repos.name,
    repoID: repos.id,
    forks: repos.forks
  })
  .save((err) => {
    if (err) {
      console.error('SAVE ERROR!', err)
    }
  })
}

module.exports.save = save;