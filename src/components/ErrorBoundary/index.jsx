import { Component } from 'react';
import P from 'prop-types';

export class ErrorBoundary extends Component {
  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    return error ? <h1>{error.message}</h1> : children;
  }
}

ErrorBoundary.propTypes = {
  children: P.node.isRequired,
};
