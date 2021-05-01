import About from "./About";
import Credits from "./Credits";
import Donate from "./Donate";

export default function Footer() {
  return (
    <div className="footer">
      <div className="wide-split">
        <About />
        <div className="divider" />
        <Credits />
      </div>
      <div className="divider" />
      <Donate />
    </div>
  );
}
