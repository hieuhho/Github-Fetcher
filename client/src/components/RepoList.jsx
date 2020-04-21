import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    Top {props.repos.length} repos by # forks.
    <div className="repoList">
      {props.repos.map((repo) => {
        return <li key={repo.repoID}>
          <span>
          <a href="repo.link">     Visit Repo     </a>
          <b>Name: </b> {repo.repoName}
          <b>Forks: {repo.forks} </b>
          </span>
        </li>
      })}
    </div>
  </div>
)

export default RepoList;