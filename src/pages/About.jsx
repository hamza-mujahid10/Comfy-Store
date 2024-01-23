const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis ex
        consectetur error amet culpa nobis voluptas praesentium ullam nisi quos
        atque veniam, hic id libero nulla fugiat numquam aliquid expedita est
        distinctio ducimus? Excepturi suscipit voluptatem iste ratione ab?
      </p>
    </>
  );
};

export default About;
