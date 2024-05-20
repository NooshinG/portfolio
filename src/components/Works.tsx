
import InView from "./InView";
import { SECTIONS } from "../constants";
import myWorks from "../data/work.json";

const Works = () => {

  return (
    <section
      className="section min-h-dvh flex-col justify-start"
      id={SECTIONS.WORK}
    >
      <h1 className={` title--extrabold mb-4 text-rose-quartz `}>
        نمونه کارها
      </h1>
      <ul className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
        {myWorks?.details.map((detail, index) => {
          return (
            <InView delay={100 * index} key={`${detail.id}`}>
            <li key={detail.id}>
              <div className="flex flex-col gap-4 p-4">
                <img
                  src={require(`../assets/images/${detail.image}.webp`)}
                  alt={detail.title}
                  className="aspect-video w-[70%] self-center rounded-lg object-cover"
                />
                <h2 className="title--normal">{detail.title}</h2>
                <hr className="border-space-cadet dark:border-pale-dogwood" />
                <p className="paragraph ">{detail.desc}</p>
                <div className="paragraph  flex gap-6 font-bold text-rose-quartz">
                  <a href={detail.github}>سورس کد</a>-
                  <a href={detail.demo}>دمو</a>
                </div>
              </div>
            </li>
            </InView>
          );
        })}
      </ul>
    </section>
  );
};

export default Works;
