import navLogo from "../../public/assets/Troll Face.png";
function Nav() {
  return (
    <nav>
      <img src={navLogo} className="nav-logo" />
      <h2 className="logo-text">Meme Generator</h2>
      <h4 className="nav-text">React Course - Project 3</h4>
    </nav>
  );
}

export default Nav;
