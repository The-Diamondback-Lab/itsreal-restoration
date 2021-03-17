import React from 'react';
import PropTypes from 'prop-types';

import LoadingLogo from '../components/LoadingLogo';

export default class BasePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.setState({
      loading: false
    });
  }

  render() {
    return (
      <React.Fragment>
        <LoadingLogo loading={this.state.loading} />
        {this.props.pageComponent}
      </React.Fragment>
    )
  }
}

BasePage.propTypes = {
  /** An instantiated page component */
  pageComponent: PropTypes.element.isRequired
}
