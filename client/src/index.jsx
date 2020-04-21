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
        console.log('Made it to here!', data)
        this.setState({
          repos: data
        })
      })
    });

    //     $.ajax({
    //       type: 'GET',
    //       url: '/repos',
    //       data: {id: data},
    //       contentType: 'application/json',
    //       error: ((err) => {
    //         console.error('GET ERROR! ', err)
    //       }),
    //       success: ((repos) => {
    //         this.setState({
    //           repos: repos
    //         })
    //       })
    //     })
    //   })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search handleSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));