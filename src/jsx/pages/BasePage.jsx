import React from 'react';

import LoadingLogo from '../components/LoadingLogo';

export default class BasePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      loaderFadedOut: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
      loaderFadedOut: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <LoadingLogo loading={this.state.loading} fadedOut={this.state.loaderFadedOut} />
        {this.props.pageComponent}
      </React.Fragment>
    )
  }
}
