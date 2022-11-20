const Card = ({ data }) => {
  const { title, image, demo, github } = data;
  return (
    <>
      <div className="md:text-xl h-max max-w-lg rounded-lg cursor-pointer origin-center translate-x-0 group/item">
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
            <a
              href={demo}
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center transition bg-sky-500 text-white rounded-lg hover:bg-sky-700"
            >
              Demo
            </a>
            <a
              href={github}
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center transition bg-sky-500 text-white rounded-lg hover:bg-sky-700"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
