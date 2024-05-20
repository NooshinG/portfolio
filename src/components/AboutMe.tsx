import { useEffect, useState } from "react";
import { aboutMeType } from "../types/types";
import InView from "./InView";
import { SECTIONS } from "../constants";
import dotDark from "../assets/icons/dot-dark.svg";
import dotLight from "../assets/icons/dot-light.svg";
import aboutMe from "../data/aboutme.json";

const AboutMe = () => {
  return (
    <section
      className="section min-h-dvh flex-col justify-start"
      id={SECTIONS.ABOUT}
    >
      <div>
        <h1 className={` title--extrabold mb-4 text-rose-quartz `}>
          درباره من
        </h1>

        <p className={` paragraph `}>{aboutMe?.aboutme}</p>
      </div>
      <ul className="flex flex-col gap-6 md:ps-12">
        {aboutMe?.details.map((detail, index) => {
          return (
            <li key={`${detail.year}-${index}`}>
              <InView delay={200 * (index + 1)}>
                <h2 className="title--normal">
                  <span>
                    <img
                      src={dotDark}
                      alt="disc"
                      className="icon inline-block dark:hidden"
                    />
                    <img
                      src={dotLight}
                      alt="disc"
                      className="icon hidden dark:inline-block"
                    />
                  </span>
                  {`${detail.year}   { ${detail.title} }`}
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
