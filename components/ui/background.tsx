const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_550px,var(--accent),transparent)]" />
    </div>
  );
};
export { Background };
