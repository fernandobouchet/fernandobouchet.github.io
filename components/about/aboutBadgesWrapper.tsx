import { Badge } from "../ui/badge";

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
    <div className="flex gap-2 flex-wrap w-full justify-center py-4">
      {Technologies.map((item) => (
        <Badge key={item.id} text={item.title} />
      ))}
    </div>
  );
};

export { AboutBadgesWrapper };
