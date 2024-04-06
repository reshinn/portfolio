import React from "react";

const Contact = () => {
  return (
    <div id="Contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-white">
        Contact Me                          
      </h1>
      <form
        action="https://getform.io/f/YerPjwbO"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-blue-800 text-sm py-2">
              Name
            </label>
            <input 
              className="border-2 rounded-lg p-3 flex bg-black border-gray-300"
              type="text"
              name="name"
              placeholder="your name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-blue-800 text-sm py-2">
              Phone Number
            </label>
            <input
              className="border-2 rounded-lg p-3 flex v bg-black border-gray-300"
              type="text"
              name="phone"
              placeholder="phone no: "
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-blue-800 text-sm py-2">
            Email
          </label>
          <input
            className="border-2 rounded-lg p-3 flex bg-black border-gray-300"
            type="email"
            name="name"
            placeholder="your Email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-blue-800  text-sm py-2">
            Subject
          </label>
          <input
            className="border-2 rounded-lg p-3 flex bg-black border-gray-300"
            type="text"
            name="subject"
            placeholder="Subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-blue-800 text-sm py-2">
            Message
          </label>
          <textarea
            className="border-2 rounded-lg p-3 bg-black border-gray-300"
            rows="5                                                                                                                                                                                                                                                                                                                                                   "
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        <button className="bg-blue-950 text-gray-100 mt-4  w-full p-4  rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
