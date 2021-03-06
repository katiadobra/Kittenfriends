import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log('bound err', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Ooooops! That's not good!</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
