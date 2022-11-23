const Badge = ({ text }) => {
  return (
    <>
      <span className="m-1 bg-cyan-100 text-cyan-800 text-xs md:text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-cyan-900 dark:text-cyan-300">
        {text}
      </span>
    </>
  );
};
export default Badge;
