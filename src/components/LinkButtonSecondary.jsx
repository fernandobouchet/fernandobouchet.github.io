const LinkButtonSecondary = ({ text, href }) => {
  return (
    <a
      className="group flex text-sm md:text-base font-medium text-blue-600 dark:text-blue-300 p-1 hover:underline hover:decoration-from-font hover:text-blue-900 dark:hover:text-blue-100 transition"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};
export default LinkButtonSecondary;
