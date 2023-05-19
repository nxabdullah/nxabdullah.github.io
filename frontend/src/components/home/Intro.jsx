function Intro() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
      <div className="flex flex-col w-full lg:w-2/3 justify-center items-start pt-12 pb-24 px-6">
        <h1 className="text-5xl leading-tight font-bold">
          Hey there! I am Abdullah. 👋🏼
        </h1>
        <p className="text-2xl mb-4 mt-2 text-gray-500 font-normal">
          My passion for using technology as a tool for making positive social
          change guided me to study pursue a Computer Science degree at the{" "}
          <span className="font-medium text-primary">
            University of Toronto
          </span>
          .
          {/* I find immense interest in observing how the intersection of
          technology with diverse disciplines can pave the way for remarkable
          innovations and groundbreaking solutions. */}
        </p>

        <p className="text-2xl mb-4 mt-2 text-gray-500 font-normal">
          Currently, I am interning as a{" "}
          <span className="font-medium text-primary">Software Engineer</span>{" "}
          with <span className="font-medium text-primary">Xero</span> on the
          Bills team, contributing to every aspect of the frontend modernization
          process. These experiences continually fuel my commitment to making
          positive changes through technology.
        </p>

        <button className="btn btn-primary">Resume</button>
      </div>

      <div className="w-full lg:w-1/4 lg:py-6 text-center">
        <img
          src={process.env.PUBLIC_URL + "LightBlueBG.png"}
          alt="Abdullah"
          className="rounded-full"
        />
      </div>
    </div>
  );
}

export default Intro;
