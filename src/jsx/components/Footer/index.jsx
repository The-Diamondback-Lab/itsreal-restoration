import About from "./About";
import Credits from "./Credits";
import Donate from "./Donate";

export default function Footer() {
  return (
    <div className="footer">
      <About />
      <div className="divider" />
      <Credits />
      <div className="divider" />
      <Donate />
    </div>
  );
}
