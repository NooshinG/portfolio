import { SECTIONS } from "../constants";
import homeDark from '../assets/icons/home-dark.svg'
import homeLight from '../assets/icons/home-light.svg'
import personDark from '../assets/icons/person-dark.svg'
import personLight from '../assets/icons/person-light.svg'
import workDark from '../assets/icons/work-dark.svg'
import workLight from '../assets/icons/work-light.svg'

const MobileNav = () => {
  return (
    <nav className="navbar md:hidden">
      <a href="/">
        <img
          src={homeDark}
          alt="home"
          className="icon dark:hidden"
        />
        <img
          src={homeLight}
          alt="home"
          className="icon hidden dark:block"
        />
      </a>
      <a href={`#${SECTIONS.ABOUT}`}>
        <img
          src={personDark}
          alt="about me"
          className="icon dark:hidden"
        />
        <img
          src={personLight}
          alt="home"
          className="icon hidden dark:block"
        />
      </a>
      <a href={`#${SECTIONS.WORK}`}>
        <img
          src={workDark}
          alt="works"
          className="icon dark:hidden"
        />
        <img
          src={workLight}
          alt="home"
          className="icon hidden dark:block"
        />
      </a>
    </nav>
  );
};

export default MobileNav;
