// import logo from "./logo.svg";
// import "./App.css";
import {
  AboutMe,
  ContactMe,
  Home,
  MobileNav,
  NavBar,
  Works,
} from "./components";
// import { useElementOnScreen } from "./hooks/useElementOnScreen";

function App() {
  return (
    <>
      <div className="flex flex-col ">
        <header className="inline-block h-[10dvh] w-full">
          <NavBar />
        </header>
        <main className="inline-block h-[80dvh] w-full overflow-x-hidden overflow-y-scroll">
          <Home />
          <AboutMe />
          <Works />
          <ContactMe />
        </main>
        <footer className="inline-block h-[10dvh] w-full ">
          <MobileNav />
        </footer>
      </div>
    </>
  );
}

export default App;
