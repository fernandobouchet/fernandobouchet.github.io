const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-background transition-colors duration-300">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,var(--accent),transparent)] opacity-40 dark:opacity-20" />
      <div className="absolute bottom-0 right-0 bg-[radial-gradient(circle_600px_at_100%_100%,var(--primary),transparent)] opacity-10 dark:opacity-10" />
    </div>
  );
};

export { Background };
