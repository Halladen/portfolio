import React, { useState } from "react";

import { Link } from "react-router-dom";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import emailjs from "emailjs-com";
import ClipLoader from "react-spinners/ClipLoader";
import { useScroll } from "../contexts/ScrollContext";

const ContactSection = () => {
  const { contactSectionRef } = useScroll();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const templateParams = {
      from_email: email,
      to_email: import.meta.env.VITE_USER_EMAIL,
      subject: subject,
      message: message,
    };

    await emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setIsLoading(false);
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => console.error("Error sending the email: " + error));

    setEmailSubmitted(true);
  };

  return (
    <section
      ref={contactSectionRef}
      className="mt-20 mb-10 w-full md:px-32"
      id="contact"
    >
      <h2 className="text-black  dark:text-white text-center text-4xl font-bold mt-8 mb-8 md:mb-12">
        Contact
      </h2>
      <div className="flex gap-10 flex-wrap md:flex-nowrap text-black dark:text-white justify-center">
        <div className="w-full md:min-w-[300px] ">
          <h5 className=" text-xl font-bold my-2">Let's Connect</h5>
          <p className="text-[#595a5a] mb-4 mx-w-md">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex items-center">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/riyadh-ali-5bb027171/"
              className="inline-block pr-3"
            >
              <img src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>

            <Link
              target="_blank"
              to="https://github.com/Halladen"
              className="inline-block "
            >
              <img
                className="bg-white rounded-full w-9"
                src={GithubIcon}
                alt="Github Icon"
              />
            </Link>
          </div>
        </div>
        <div className="w-full md:min-w-[300px] min-h-96 flex justify-center">
          {emailSubmitted ? (
            <div>
              <p className="text-green-500 text-xl mt-2 w-full">
                Email sent successfully!
              </p>
              <button
                onClick={() => setEmailSubmitted(false)}
                className="w-full  py-2 mt-4 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
              >
                Send new Email
              </button>
            </div>
          ) : (
            <form
              className="flex flex-shrink-0 flex-col w-full"
              onSubmit={handleSubmit}
            >
              <div className="mb-6">
                <h5 className="mb-5 text-xl font-bold my-2">Send an Email</h5>
                <label
                  htmlFor="email"
                  className="text-black dark:text-white block mb-2 text-sm font-medium"
                >
                  Your email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="dark:bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] dark:text-gray-100 text-black  text-sm rounded-lg block w-full p-2.5"
                  placeholder="example@google.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-black dark:text-white block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="dark:bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] dark:text-gray-100 text-black  text-sm rounded-lg block w-full p-2.5"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-black dark:text-white block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  id="message"
                  className="dark:bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] dark:text-gray-100 text-black  text-sm rounded-lg block w-full p-2.5"
                  placeholder="Let's talk about..."
                />
              </div>

              <button
                type="submit"
                className={`relative  w-full  py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white ${
                  isLoading ? "" : "hover:bg-blue-600"
                }`}
              >
                <p>Send Email</p>

                {isLoading && (
                  <div className="absolute bg-transparent bg-gradient-to-r from-slate-600 to-slate-600 opacity-50 rounded-lg top-0 left-0 w-full h-full flex justify-center items-center">
                    <ClipLoader color="white" size={30} />
                  </div>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
