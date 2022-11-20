const Card = ({ data }) => {
  const { title, image, demo, github } = data;
  return (
    <>
      <div className="md:text-xl h-max max-w-lg rounded-lg cursor-pointer origin-center translate-x-0 group/item">
        <img
          src={image}
          alt={title}
          className="group-hover/item:opacity-25 transition duration-700"
        />
        <div className="invisible absolute w-full h-full flex flex-col top-0 items-center justify-around group-hover/item:visible transition duration-700">
          <h2 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <div className="flex gap-8">
            <a
              href={demo}
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Demo
            </a>
            <a
              href={github}
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
