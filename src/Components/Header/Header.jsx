import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
const Header = ({ setActiveNav}) => {
  return (
    <header onMouseEnter={()=> setActiveNav('#')}>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Santhosh</h1>
        <h5 className="text-light">Fullstack and Appian Developer</h5>
        <CTA setActiveNav={setActiveNav} />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Santhosh" />
        </div>

        <a href="#contact" className="scroll__down" onClick={()=> setActiveNav('#contact')}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
