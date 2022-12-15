const Badge = ({ text }) => {
  return (
    <>
      <span className="m-1 border border-neutral-600 text-neutral-600 dark:border-neutral-300 rounded-lg dark:text-neutral-300 text-xs md:text-sm font-light mr-2 px-2.5 py-0.5">
        {text}
      </span>
    </>
  );
};
export default Badge;
