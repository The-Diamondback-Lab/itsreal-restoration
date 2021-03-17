import logo from '../../assets/special-project-logo.jpg';

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
