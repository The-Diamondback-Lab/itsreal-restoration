import logo from '../../assets/special-project-logo.jpg';

export default function LoadingLogo() {
  return (
    <div id="loading-logo">
      <img src={logo} alt="Special Projects"></img>
      <div className="loading-dots">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
