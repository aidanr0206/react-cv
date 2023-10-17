import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import nativeBase from "../assets/nativeBase.png";
import reactLogo from "../assets/reactLogo.png";
import cSharp from "../assets/cSharp.png";
import tailwind from "../assets/tailwind.png";
import sql from "../assets/sql.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-purple-500">Skills</p>
          <p className="py-4">&lt; Here are areas I have experience in /&gt;</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-gray-950 pt-4 hover:scale-110 duration-500">
            <img src={reactLogo} alt="React Logo" className="w-20 mx-auto"></img>
            <p className="my-4">React.js</p>
          </div>

          <div className="shadow-md shadow-gray-950 pt-4 hover:scale-110 duration-500">
            <img src={nativeBase} alt="NativeBase Logo" className="w-20 mx-auto"></img>
            <p className="my-4">NativeBase</p>
          </div>

          <div className="shadow-md shadow-gray-950 pt-4 hover:scale-110 duration-500">
            <img src={tailwind} alt="Tailwind Logo" className="w-20 mx-auto"></img>
            <p className="my-4">Tailwind</p>
          </div>

          <div className="shadow-md shadow-gray-950 pt-4 hover:scale-110 duration-500">
            <img src={cSharp} alt="c# Logo" className="w-20 mx-auto"></img>
            <p className="my-4">C#</p>
          </div>

          <div className="shadow-md shadow-gray-950 pt-4 hover:scale-110 duration-500">
            <img src={javascript} alt="JS Logo" className="w-20 mx-auto"></img>
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-md shadow-gray-950 pt-4 hover:scale-110 duration-500">
            <img src={html} alt="HTML Logo" className="w-20 mx-auto"></img>
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-gray-950 pt-4 hover:scale-110 duration-500">
            <img src={css} alt="css Logo" className="w-20 mx-auto"></img>
            <p className="my-4">css</p>
          </div>

          <div className="shadow-md shadow-gray-950 pt-4 hover:scale-110 duration-500">
            <img src={sql} alt="SQL Logo" className="w-20 mx-auto"></img>
            <p className="my-4">SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
