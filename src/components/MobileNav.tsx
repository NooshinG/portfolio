import { SECTIONS } from "../constants";

const MobileNav = () => {
  return (
    <nav className="navbar md:hidden">
      <a href="/">
        <img
          src="/assets/icons/home-dark.svg"
          alt="home"
          className="icon dark:hidden"
        />
        <img
          src="/assets/icons/home-light.svg"
          alt="home"
          className="icon hidden dark:block"
        />
      </a>
      <a href={`#${SECTIONS.ABOUT}`}>
        <img
          src="/assets/icons/person-dark.svg"
          alt="about me"
          className="icon dark:hidden"
        />
        <img
          src="/assets/icons/person-light.svg"
          alt="home"
          className="icon hidden dark:block"
        />
      </a>
      <a href={`#${SECTIONS.WORK}`}>
        <img
          src="/assets/icons/work-dark.svg"
          alt="works"
          className="icon dark:hidden"
        />
        <img
          src="/assets/icons/work-light.svg"
          alt="home"
          className="icon hidden dark:block"
        />
      </a>
    </nav>
  );
};

export default MobileNav;
