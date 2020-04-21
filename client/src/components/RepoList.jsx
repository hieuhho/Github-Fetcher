import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    Top {props.repos.length} repos by # forks.
    <div className="repoList">
      {props.repos.slice(0, 25).map((repo) => {
        return <li key={repo.repoID}>
        <span>
          <a href={`${repo.link}`} style={{textDecoration:'none'}}> {repo.repoName} </a>
          <b> by: </b> {repo.username}
          <b> Forks: </b> {repo.forks}
          <div>=========================================</div>
        </span>
        </li>
      })}
    </div>
  </div>
)

export default RepoList;