const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({

  username: String,
  repoName: String,
  repoID: {type: Number, unique: true},
  link: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {

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