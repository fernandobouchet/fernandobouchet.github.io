const Badge = ({ text }) => {
  return (
    <>
      <span className="m-1 rounded-lg text-xs bg-light-surface dark:bg-dark-surface text-light-fontSurface dark:text-dark-fontSurface md:text-sm font-light mr-2 px-2.5 pt-1.5 pb-1">
        {text}
      </span>
    </>
  );
};
export default Badge;
