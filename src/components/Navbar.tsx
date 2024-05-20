import { SECTIONS } from "../constants";
import moon from '../assets/icons/moon.svg'
import sun from '../assets/icons/sun.svg'

const NavBar = () => {
  const toggleThemeHandler = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="navbar">
      <a href="/" className="font-bold">
        نوشین قربانی
      </a>
      <div className="inline-block bg-isabelline max-md:hidden  dark:bg-ultra-violet">
        <ul className="flex gap-7 ">
          <li>
            <a href={`#${SECTIONS.HOME}`}>خانه</a>
          </li>
          <li>
            <a href={`#${SECTIONS.ABOUT}`}>درباره من</a>
          </li>
          <li>
            <a href={`#${SECTIONS.WORK}`}>نمونه کارها</a>
          </li>
        </ul>
      </div>
      <div className="inline-block">
        <button type="button" className="icon" onClick={toggleThemeHandler}>
          <img
            src={moon}
            alt="moon"
            className="dark:hidden"
          />
          <img
            src={sun}
            alt="sun"
            className="hidden dark:block"
          />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
