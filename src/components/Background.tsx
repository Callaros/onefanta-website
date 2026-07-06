function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-500/5 rounded-full blur-3xl" />
    </div>
  );
}

export default Background;
