import { SectionContainer } from "../ui/section-container";
import { ContactLinks } from "./contact-links";

const Contact = () => {
  return (
    <SectionContainer sectionId="contact">
      <h2 className="section-title pt-4 pb-6">Contact</h2>
      <div className="text-center">
        <p>Thank you for your interest in getting in touch!</p>
        <p>
          The best way to contact me is through my email address:{" "}
          <a href="mailto:fernandobouchet@gmail.com" className="link-text">
            fernandobouchet@gmail.com
          </a>
          .
        </p>
        <p>I will get back to you as soon as possible!</p>
      </div>
      <ContactLinks />
    </SectionContainer>
  );
};
export { Contact };
