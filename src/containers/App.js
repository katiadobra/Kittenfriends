import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './ItemsList/ItemsList';
import SearchBox from '../components/SearchBox/SearchBox';
import './App.scss';

import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField } from '../store/actions';

class App extends Component {
  state = {
    cats: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        this.setState({ cats: users });
      });
  }

  render() {
    const { cats } = this.state;
    const { searchField, searchChange } = this.props;
    const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <header className="App-header tc">
          <h1 className="app-logo">Kittenfriends</h1>
        </header>
        {cats.length
          ? <div className="tc">
              <SearchBox onSearchChange={searchChange} />
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

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchChange: event => dispatch(setSearchField(event.target.value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
