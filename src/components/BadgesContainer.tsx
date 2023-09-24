import Badge from './ui/Badge';
import style from '../styles/components/BadgesContainer.module.scss';

const Technologies = [
  { id: 0, title: 'HTML' },
  { id: 1, title: 'CSS' },
  { id: 2, title: 'JAVASCRIPT' },
  { id: 3, title: 'TYPESCRIPT' },
  { id: 4, title: 'REACT' },
  { id: 5, title: 'NEXT JS' },
  { id: 6, title: 'NODE JS' },
  { id: 7, title: 'EXPRESS' },
  { id: 8, title: 'MONGO DB' },
  { id: 9, title: 'POSTGRESQL' },
  { id: 10, title: 'MYSQL' },
];

const BadgesContainer = () => {
  return (
    <div className={`${style.badge__container}`}>
      {Technologies.map((tech) => (
        <Badge key={tech.id} text={tech.title} />
      ))}
    </div>
  );
};

export default BadgesContainer;
