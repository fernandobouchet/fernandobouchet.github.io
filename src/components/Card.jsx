import StyledLinkButton from "./StyledLinkButton";

const Card = ({ data }) => {
  const { title, image, demo, github } = data;
  return (
    <>
      <div className="md:text-xl h-max max-w-sm sm:max-w-xl rounded-lg cursor-pointer origin-center translate-x-0 group/item">
        <img
          src={image}
          alt={title}
          className="group-hover/item:opacity-10 transition duration-700"
        />
        <div className="invisible absolute w-full h-full flex flex-col top-0 items-center justify-around group-hover/item:visible">
          <h2 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <div className="flex gap-8">
            <StyledLinkButton href={demo} text="Demo" />
            <StyledLinkButton href={github} text="Source" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
