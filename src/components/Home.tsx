import { SECTIONS } from "../constants";
import Avatar from "./Avatar";
import Resume from "./Resume";
import { useElementOnScreen } from "../hooks/useElementOnScreen";

const Home = () => {
  const { ref: HomeRef, isVisible: isHomeVisible } = useElementOnScreen();
  // const isHomeVisible = true

  return (
    <section
      className="section min-h-[80dvh]  place-content-center"
      id={SECTIONS.HOME}
      ref={HomeRef}
    >
      <Avatar isHomeVisible={isHomeVisible} />
      <div className=" flex flex-col place-content-center gap-4 md:max-w-[65%]">
        <h2
          className={`reveal__home text-clamp-light font-medium leading-8 delay-300 ${isHomeVisible ? `active__home` : ""}`}
        >
          نوشین قربانی
        </h2>
        <h1
          className={`reveal__home title--extrabold delay-500 ${isHomeVisible ? `active__home` : ""}`}
        >
          توسعه دهنده <br /> فرانت اند
        </h1>
        <div
          className={`reveal__home text-clamp-light flex font-medium leading-8 delay-700 ${isHomeVisible ? `active__home` : ""}`}
        >
          <img
            src="/assets/icons/location-pin-dark.svg"
            alt="location-pin"
            className="icon dark:hidden"
          />
          <img
            src="/assets/icons/location-pin-light.svg"
            alt="location-pin"
            className="icon hidden dark:block"
          />
          <span>مشهد</span>
        </div>
        <div
          className={`reveal__home delay-1000 ${isHomeVisible ? `active__home` : ""}`}
        >
          <Resume />
        </div>
      </div>
    </section>
  );
};
export default Home;
