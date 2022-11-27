import StyledLinkButton from "./StyledLinkButton";

const Card = ({ data }) => {
  const { title, info, image, demo, github } = data;
  return (
    <>
      <div className="flex flex-col md:flex-row max-w-sm sm:max-w-3xl items-center rounded-lg cursor-pointer bg-neutral-800 hover:bg-sky-700 transition">
        <img src={image} alt={title} className="w-82 md:w-96 rounded-lg" />
        <div className="h-full flex flex-col items-center p-4">
          <div>
            <h3 className="mb-2 font-default">{title}</h3>
            <p className="text-sm md:text-base p-2">{info}</p>
          </div>
          <div className="flex gap-8">
            <StyledLinkButton href={demo} text="Preview" />
            <StyledLinkButton href={github} text="Source" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
