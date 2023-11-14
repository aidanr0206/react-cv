import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-purple-500">About</p>
          </div>

          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Welcome to my online CV, I hope you find everything you are looking for.</p>
          </div>

          <div className="space-y-2">
            <p>
              I studied a BCIS in game design and development at Vega School in Johannesburg and have worked in the
              software industry for the past three years. I have had the opportunity to work in collaboration with team
              members on various projects, ranging from developing mobile applications to designing complex software
              systems. This has allowed me to gain a deep understanding of different programming languages and
              frameworks, as well as hone my problem-solving skills. My diverse background has allowed me to develop
              excellent interpersonal skills and adaptability.
            </p>
            <p>
              Whether it's engaging with customers, collaborating with teammates, or presenting to large audiences, I
              thrive in dynamic settings and enjoy the challenge of connecting with people from all walks of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
