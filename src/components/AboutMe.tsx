import { useEffect, useState } from "react";
import { aboutMeType } from "../types/types";
import InView from "./InView";
import { SECTIONS } from "../constants";

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState<aboutMeType | null>(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch("data/aboutme.json");
      const data = await response.json();
      return data;
    }

    getData()
      .then((data) => setAboutMe(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <section className="section min-h-dvh flex-col justify-start" id={SECTIONS.ABOUT}>
      <div>
        {/* <InView delay={700}> */}
          <h1 className={` title--extrabold mb-4 text-rose-quartz `}>
            درباره من
          </h1>
        {/* </InView> */}
        <InView delay={700}>
          <p className={` paragraph `}>{aboutMe?.aboutme}</p>
        </InView>
      </div>
      <ul className="flex flex-col gap-6 md:ps-12">
        {aboutMe?.details.map((detail, index) => {
          return (
            <li key={`${detail.year}-${index}`}>
              <InView delay={500}>
                <h2 className="title--normal">
                  <span>
                    <img
                      src="/assets/icons/dot-dark.svg"
                      alt="disc"
                      className="icon inline-block dark:hidden"
                    />
                    <img
                      src="/assets/icons/dot-light.svg"
                      alt="disc"
                      className="icon hidden dark:inline-block"
                    />
                  </span>
                 { `${detail.year}   { ${detail.title} }`}
                </h2>
                <p className="paragraph ">{detail.desc}</p>
              </InView>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AboutMe;
