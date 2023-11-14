import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text, count] = useTypewriter({
    words: ["Software Developer", "ReactJS Developer", "Front-End Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div name="home" className="w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex flex-col lg:flex-row lg:gap-4 text-4xl sm:text-6xl font-bold">
          <h1 className="text-gray-300">Hi there, I am</h1>
          <h1 className="text-purple-500">Aidan Rheeder</h1>
        </div>

        <h2 className="text-4xl sm:text-6xl font-bold text-gray-400">
          I am a <span>{text}</span>
          <Cursor cursorColor="rgb(169, 85, 247)"></Cursor>
        </h2>
        <p className="text-gray-400 py-4 max-w-[700px]">
          I am an agile React developer with a flair for crafting sleek, user-centric interfaces. Merging creativity
          with code, I thrive on turning design visions into seamless, interactive experiences. Passionate about clean,
          efficient solutions, I bring a dynamic approach to front-end development, ensuring your projects not only meet
          but exceed expectations.
        </p>
        <div>
          <Link
            className="text-white group border-2 px-6 py-3 my-2 max-w-fit flex items-center hover:bg-purple-500 hover:border-purple-500 duration-300 hover:cursor-pointer"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 "></HiArrowNarrowRight>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
