import { CONTACT_INFO, SECTIONS } from "../constants";
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import dotDark from "../assets/icons/dot-dark.svg";
import dotLight from "../assets/icons/dot-light.svg";

const ContactMe = () => {
  const { ref: titleRef, isVisible: isTitleVisible } = useElementOnScreen();
  return (
    <section className="section flex-col" id={SECTIONS.ContactMe}>
      <h1 className="title--extrabold" ref={titleRef}>
        ارتباط با من
      </h1>
      <ul className="paragraph text-left ">
        <li
          className={`reveal mb-2 delay-100 ${isTitleVisible ? `active` : ""}`}
        >
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
            />{" "}
            ایمیل :
          </span>
          <a href={`mailto:${CONTACT_INFO.EMAIL}`}>{CONTACT_INFO.EMAIL}</a>
        </li>
        <li
          className={`reveal mb-2 delay-200 ${isTitleVisible ? `active` : ""}`}
        >
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
            />{" "}
            گیت هاب :
          </span>
          <a href={CONTACT_INFO.GITHUB}>{CONTACT_INFO.GITHUB}</a>
        </li>
        <li
          className={`reveal mb-2 delay-300 ${isTitleVisible ? `active` : ""}`}
        >
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
            />{" "}
            لینکدین :
          </span>
          <a href={CONTACT_INFO.LINKEDIN}>{CONTACT_INFO.LINKEDIN}</a>
        </li>
      </ul>
    </section>
  );
};

export default ContactMe;
