const LinkButtonSecondary = ({ text, href }) => {
  return (
    <a
      className="group flex text-sm md:text-base font-medium text-light-fontColored dark:text-dark-fontColored p-1 hover:underline hover:decoration-from-font hover:text-light-font hover:dark:text-dark-font"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};
export default LinkButtonSecondary;
