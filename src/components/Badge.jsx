const Badge = ({ text }) => {
  return (
    <>
      <span className="m-1 rounded-lg text-xs md:text-sm leading-4 md:leading-5 bg-light-surface dark:bg-dark-surface text-light-fontSurface dark:text-dark-fontSurface font-light mr-2 px-2.5 pt-1.5 pb-1 transition">
        {text}
      </span>
    </>
  );
};
export default Badge;
