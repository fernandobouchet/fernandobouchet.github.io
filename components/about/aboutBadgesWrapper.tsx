import { Badge } from "@/components/ui/badge";

const Technologies = [
  { id: 0, title: "HTML" },
  { id: 1, title: "CSS" },
  { id: 2, title: "JAVASCRIPT" },
  { id: 3, title: "TYPESCRIPT" },
  { id: 4, title: "REACT" },
  { id: 5, title: "NEXT JS" },
  { id: 6, title: "NODE JS" },
  { id: 7, title: "EXPRESS" },
  { id: 8, title: "MONGO DB" },
  { id: 9, title: "POSTGRESQL" },
  { id: 10, title: "MYSQL" },
];

const AboutBadgesWrapper = () => {
  return (
    <div className="max-w-xs md:max-w-md lg:max-w-lg inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] py-4">
      <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll">
        {Technologies.map((item) => (
          <li className="mx-4" key={item.id}>
            <Badge key={item.id} text={item.title} className="bg-transparent" />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start animate-infinite-scroll"
        aria-hidden="true"
      >
        {Technologies.map((item) => (
          <li className="mx-4" key={item.id}>
            <Badge key={item.id} text={item.title} className="bg-transparent" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { AboutBadgesWrapper };
