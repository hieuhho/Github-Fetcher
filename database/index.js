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
    username: repos.username,
    repoName: repos.repoName,
    repoID: repos.repoID,
    link: repos.link,
    forks: repos.forks
  })

  myRepo.save((err, doc) => {
    if (err) {
      return console.error('SAVE ERROR!', err.message)
    }
    console.log('SAVE SUCCESSFUL!')
  })
};

let getRepos = () => {
  return Repo.find({}).sort({
    forks: -1
  }).limit(25);
};

console.log('getRepos: ', getRepos);
module.exports.save = save;
module.exports.getRepos = getRepos;