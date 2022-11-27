const Badge = ({ text }) => {
  return (
    <>
      <span className="m-1 rounded-3xl bg-sky-100 text-sky-400 text-xs md:text-sm font-normal mr-2 px-2.5 py-0.5 dark:bg-sky-900 dark:text-sky-200">
        {text}
      </span>
    </>
  );
};
export default Badge;
