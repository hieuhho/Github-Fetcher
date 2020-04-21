import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.getTopRepo(event);
  };

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.post({
      url: '/repos',
      data: {search: term},
      error: ((err) => {
        console.error('AJAX POST FAILED!', err)
      }),
      success: ((data) => {
        this.setState({
          repos: data
        })
      })
    });
  };

  getTopRepo (event) {
    $.get({
      url: '/repos',
      error: ((err) => {
        return console.log('AJAX GET FAILED!', err)
      }),
      success: ((repos) => {
        this.setState({
          repos: repos
        })
      })
    });
  };

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search handleSearch={this.search}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));