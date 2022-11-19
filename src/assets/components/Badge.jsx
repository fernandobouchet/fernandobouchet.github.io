const Badge = ({ text }) => {
  return (
    <>
      <span className="m-1 bg-blue-100 text-blue-800 text-xs md:text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-sky-900 dark:text-sky-300">
        {text}
      </span>
    </>
  );
};
export default Badge;
