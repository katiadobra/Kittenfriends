import React, { Component } from 'react';
import Card from '../components/Card/Card';
import SearchBox from '../components/SearchBox/SearchBox';

import { cats } from '../assets/cats';
import './App.scss';

class App extends Component {
  state = {
    cats: cats,
    searchfield: ''
  };

  searchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredCats = this.state.cats.filter(cat => {
      return cat.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="App">
        <header className="App-header tc">
          <h1 className="app-logo">Kittenfriends</h1>
          <SearchBox onSearchChange={this.searchChange} />
        </header>
        <div className="list-holder">
          {filteredCats.map(cat => {
            return <Card key={cat.id} data={cat} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
