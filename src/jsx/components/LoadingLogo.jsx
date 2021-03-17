import PropTypes from 'prop-types';

import logo from '../../assets/special-project-logo.jpg';

/**
 * @param {LoadingLogoPropTypes} props
 */
export default function LoadingLogo(props) {
  return (
    <div id="loading-logo" className={props.loading ? null : "fadeOut"}>
      <img src={logo} alt="Special Projects"></img>
      <div className="loading-dots">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

LoadingLogo.propTypes = {
  /** Indicates whether the logo should still show (true) or not (false). */
  loading: PropTypes.bool
}

/**
 * @typedef LoadingLogoPropTypes
 * @prop {boolean} [loading] Indicates whether the logo should still show
 * (true) or not (false).
 */
