import React, { Component } from 'react';
import Card from '../components/Card/Card';
import SearchBox from '../components/SearchBox/SearchBox';
import './App.scss';

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
              <div className="list-holder">
                {filteredCats.map(cat => {
                  return <Card key={cat.id} data={cat} />;
                })}
              </div>
            </div>
          : <div className="tc">
              <div className="spinner">Loading...</div>
            </div>}
      </div>
    );
  }
}

export default App;
