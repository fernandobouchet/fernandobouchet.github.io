const Badge = ({ text }) => {
  return (
    <>
      <span className="m-1 rounded-md text-xs bg-light-surface dark:bg-dark-surface text-light-fontSurface dark:text-dark-fontSurface md:text-sm font-light mr-2 px-2.5 py-0.5">
        {text}
      </span>
    </>
  );
};
export default Badge;
