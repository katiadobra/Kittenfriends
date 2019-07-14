import React, { Component } from 'react';
import CardList from './ItemsList/ItemsList';
import SearchBox from '../components/SearchBox/SearchBox';
import './App.scss';

import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  state = {
    cats: [],
    searchfield: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        this.setState({ cats: users });
      });
  }

  searchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { cats, searchfield } = this.state;
    const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <div className="App">
        <header className="App-header tc">
          <h1 className="app-logo">Kittenfriends</h1>
        </header>
        {cats.length
          ? <div className="tc">
              <SearchBox onSearchChange={this.searchChange} />
              <ErrorBoundary>
                <CardList list={filteredCats} />
              </ErrorBoundary>
            </div>
          : <div className="tc">
              <div className="spinner">Loading...</div>
            </div>}
      </div>
    );
  }
}

export default App;
