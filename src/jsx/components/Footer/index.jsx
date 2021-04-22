import About from "./About";
import Credits from "./Credits";

export default function Footer() {
  return (
    <div className="footer">
      <About />
      <div className="divider" />
      <Credits />
    </div>
  );
}
