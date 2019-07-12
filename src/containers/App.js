import React, { Component } from 'react';
import Card from '../components/Card/Card';
import SearchBox from '../components/SearchBox/SearchBox';

import { cats } from '../assets/cats';
import './App.scss';

class App extends Component {
  render() {
    console.log(cats);
    return (
      <div className="App">
        <header className="App-header tc">
          <h1>Kittenfriends</h1>
          <div>
            <SearchBox />
          </div>
        </header>
        <div className="list-holder">
          {cats.map(cat => {
            return <Card key={cat.id} data={cat} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
