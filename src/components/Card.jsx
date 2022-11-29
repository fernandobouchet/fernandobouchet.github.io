import LinkButtonSecondary from "./LinkButtonSecondary";

const Card = ({ data }) => {
  const { title, info, image, demo, github } = data;
  return (
    <>
      <div className="flex flex-col md:flex-row max-w-sm md:max-w-2xl lg:max-w-3xl items-center rounded-lg cursor-pointer bg-neutral-800">
        <img src={image} alt={title} className="w-82 md:w-96 rounded-lg" />
        <div className="w-full h-full flex flex-col items-center p-3">
          <div>
            <h3 className="mb-2 font-medium">{title}</h3>
            <p className="text-sm md:text-base p-2">{info}</p>
          </div>
          <div className="flex gap-8">
            <LinkButtonSecondary href={demo} text="Preview" />
            <LinkButtonSecondary href={github} text="Source" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
