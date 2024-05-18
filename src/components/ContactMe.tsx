import { CONTACT_INFO, SECTIONS } from "../constants";
import InView from "./InView";

const ContactMe = () => {
  return (
    <section className="section flex-col" id={SECTIONS.ContactMe}>
      <h1 className="title--extrabold">ارتباط با من</h1>
      <ul className="paragraph text-left ">
        <li className="mb-2">
          <InView delay={200}>
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
              />{" "}
              ایمیل :
            </span>
            <a href={`mailto:${CONTACT_INFO.EMAIL}`}>{CONTACT_INFO.EMAIL}</a>
          </InView>
        </li>
        <li className="mb-2">
          <InView delay={300}>
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
              />{" "}
              گیت هاب :
            </span>
            <a href={CONTACT_INFO.GITHUB}>{CONTACT_INFO.GITHUB}</a>
          </InView>
        </li>
        <li className="mb-2">
          <InView delay={400}>
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
              />{" "}
              لینکدین :
            </span>
            <a href={CONTACT_INFO.LINKEDIN}>{CONTACT_INFO.LINKEDIN}</a>
          </InView>
        </li>
      </ul>
    </section>
  );
};

export default ContactMe;
