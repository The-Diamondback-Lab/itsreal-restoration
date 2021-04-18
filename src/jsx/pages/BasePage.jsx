import React from 'react';
import PropTypes from 'prop-types';

import LoadingLogo from '../components/LoadingLogo';

/**
 * @extends React.Component<BasePagePropTypes>
 */
export default class BasePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      /** Whether or not the component is loading */
      loading: true
    };

    this.ready = this.ready.bind(this);
  }

  /**
   * Used to indicate that the component has finished loading.
   */
  ready() {
    this.setState({
      loading: false
    });
  }

  render() {
    let pageElement = React.createElement(this.props.pageComponent, {
      ...this.props.pageProps,
      onReady: this.ready
    });

    return (
      <React.Fragment>
        <LoadingLogo loading={this.state.loading} />
        {pageElement}
      </React.Fragment>
    )
  }
}

BasePage.propTypes = {
  /** The page component type to load in */
  pageComponent: PropTypes.elementType.isRequired,
  /** Props passed to the page component */
  pageProps: PropTypes.any
}

/**
 * @typedef BasePagePropTypes
 * @prop {React.Component} pageComponent
 * @prop {any} pageProps
 */
