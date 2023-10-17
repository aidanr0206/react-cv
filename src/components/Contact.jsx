import React from "react";

const Contact = () => {
  return (
    <div name='contact' className="w-full h-full flex justify-center items-center p-4">
      {/* container */}
      <form method="POST" action="https://getform.io/f/eebf957f-9f0a-4ad6-8724-5e4c8e5fdb65" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-4 text-gray-300">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500">Contact</p>
          <p className="py-4">&lt; Submit the form below or contact me through my socials /&gt;</p>
        </div>

        <div className="flex flex-col gap-4 ">
          <input className="bg-gray-400 placeholder-gray-500 p-2" type="text" placeholder="Name" name="name"></input>
          <input className="bg-gray-400 placeholder-gray-500 p-2" type="email" placeholder="Email" name="email"></input>
          <textarea className="bg-gray-400 placeholder-gray-500 p-2" placeholder="Message" name="message" rows={10}></textarea>
        </div>
        <button className="text-white border-2 hover:shadow-[inset_13rem_0_0_0] hover:shadow-purple-500 hover:border-purple-500 duration-[200ms,600ms] transition-[color,box-shadow,border] px-4 py-3 my-8 mx-auto flex items-center">
          Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
