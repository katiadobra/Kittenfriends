import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './ItemsList/ItemsList';
import SearchBox from '../components/SearchBox/SearchBox';
import './App.scss';

import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestCats } from '../store/actions';

class App extends Component {
  componentDidMount() {
    this.props.onRequestCats();
  }

  render() {
    const { searchField, onSearchChange, cats, isPending } = this.props;
    const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <header className="App-header tc">
          <h1 className="app-logo">Kittenfriends</h1>
        </header>
        {!isPending
          ? <div className="tc">
              <div className="spinner">Loading...</div>
            </div>
          : <div className="tc">
              <SearchBox changeSearch={onSearchChange} />
              <ErrorBoundary>
                <CardList list={filteredCats} />
              </ErrorBoundary>
            </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchCats.searchField,
    cats: state.requestCats.cats,
    isPending: state.requestCats.isPending,
    error: state.requestCats.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestCats: () => dispatch(requestCats()) // with Thunk this dispatch going to return a function
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
