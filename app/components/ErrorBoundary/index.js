import React from 'react';
import {SOMETHING_WENT_WRONG} from '../../Common/consts';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return <h1>{SOMETHING_WENT_WRONG}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;