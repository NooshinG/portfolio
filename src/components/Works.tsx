import { useEffect, useState } from "react";
import { myWorksType } from "../types/types";
import InView from "./InView";
import { SECTIONS } from "../constants";

const Works = () => {
  const [myWorks, setMyWorks] = useState<myWorksType | null>(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch("data/work.json");
      const data = await response.json();
      return data;
    }

    getData()
      .then((data) => setMyWorks(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <section
      className="section min-h-dvh flex-col justify-start"
      id={SECTIONS.WORK}
    >
      {/* <div>
        <InView delay={200}>
          <h1 className={` title--extrabold mb-4 text-rose-quartz `}>
            نمونه کارها
          </h1>
        </InView>
        <InView delay={200}>
          <p className={` paragraph `}>{myWorks?.description}</p>
        </InView>
      </div> */}
      <h1 className={` title--extrabold mb-4 text-rose-quartz `}>
        نمونه کارها
      </h1>
      <ul className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
        {myWorks?.details.map((detail, index) => {
          return (
            <InView delay={100 * index} key={`${detail.id}`}>
              <li>
                <div className="flex flex-col gap-4 p-4">
                  <img
                    src={detail.image}
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
