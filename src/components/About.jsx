import React from "react";
import { Link } from "react-scroll";

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
          <div>
            <p>
              I am an extremely social and motivated individual who loves communicating to anyone and everyone I can. I have worked in many different environments from waitering, bartending and
              modeling, to software development, commentating live e-sports games, hosting for e-sports tournaments and more. As someone who is confident and outgoing, I love social environments. And
              with my technological background I also enjoy working with computers, as well as building and designing applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
