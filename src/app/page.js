"use client";
import Image from "next/image";
import "./globals.css";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <main className="overflow-x-clip">
      <Navbar />

      <section
        id="home"
        className="h-screen bg-custom-section-one bg-cover bg-center flex flex-col md:flex-row justify-evenly items-center"
      >
        <div className="h-[40%] w-[80%] md:w-[40%] flex items-center justify-center flex-col">
          <div className="text-slate-200 text-9xl font-bold font-['Poppins'] leading-[128px]">
            Green Horizon
          </div>
          <div className="text-neutral-50 text-[28px] font-normal font-['Poppins'] leading-7">
            A youth-led non-profit organization located in Brampton focused on
            creating sustainable solutions
          </div>
        </div>
        <div className="h-[40%] w-[80%] md:w-[40%] flex items-center justify-center mb-[40px] mt-[40px]">
          <Image
            src="/section-one-tree.svg"
            width={570}
            height={570}
            alt="tree svg"
          />
        </div>
      </section>

      <section
        id="mission"
        className="flex flex-col md:flex-row justify-evenly items-center bg-emerald-950 h-[1000px] w-full"
      >
        <div className="flex flex-col justify-evenly items-start w-[80%] md:w-[40%] h-[350px]">
          <div className="w-full md:w-[502px] text-slate-200 text-[64px] font-bold font-['Poppins'] leading-[64px]">
            Our Mission
          </div>
          <div className="w-full md:w-[616px] text-neutral-50 text-[22px] font-normal font-['Poppins'] leading-7 tracking-wide">
            Green Horizon aims to combat climate change through youth-led
            initiatives, focusing on deforestation, air pollution, and water
            pollution. We plant trees, clean parks, recycle e-waste, and educate
            young minds. Join us in building a greener future.
          </div>
          <div className="w-full md:w-[173px] h-[58px] px-[9px] py-[11px] bg-emerald-600 rounded-xl justify-center items-center gap-2.5 inline-flex">
            <div className="text-black text-2xl font-bold font-['Poppins']">
              Get Involved
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[80%] md:w-[40%]">
          <Image
            src="/section-two-tree.svg"
            width={570 * 0.75}
            height={570 * 0.75}
            className="md:w-auto md:h-auto"
            alt="tree svg"
          />
        </div>
      </section>

      <section
        id="solutions"
        className="flex flex-col items-center justify-evenly w-full h-[1200px] bg-[#FAFAFA]"
      >
        <div className="w-full flex items-center justify-center">
          <Image src="/solutions.svg" width={308} height={64} alt="tree svg" />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex justify-evenly items-center w-[80%]">
            <div>
              <Image
                src="/section-three-image-one.svg"
                width={260}
                height={260}
                alt="tree svg"
              />
              <div className="text-center text-green-950 text-[28px] font-semibold font-['Poppins'] leading-7">
                Tree Planting
              </div>
            </div>

            <div>
              <Image
                src="/section-three-image-two.svg"
                width={260}
                height={260}
                alt="tree svg"
              />
              <div className="text-center text-green-950 text-[28px] font-semibold font-['Poppins'] leading-7">
                Park Cleanup
              </div>
            </div>

            <div>
              <Image
                src="/section-three-image-three.svg"
                width={260}
                height={260}
                alt="tree svg"
              />
              <div className="text-center text-green-950 text-[28px] font-semibold font-['Poppins'] leading-7">
                E-Waste Recycling
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around items-center w-[70%]">
          <div>
            <Image
              src="/section-three-image-four.svg"
              width={260}
              height={260}
              alt="tree svg"
            />
            <div className="text-center text-green-950 text-[28px] font-semibold font-['Poppins'] leading-7">
              Youth Workshops
            </div>
          </div>

          <div>
            <Image
              src="/section-three-image-five.svg"
              width={260}
              height={260}
              alt="tree svg"
            />
            <div className="text-center text-green-950 text-[28px] font-semibold font-['Poppins'] leading-7">
              School Speaking
            </div>
          </div>
        </div>
      </section>

      <section
        id="involved"
        className="flex flex-col md:flex-col lg:flex-row justify-evenly items-center bg-emerald-950 h-[770px] w-full"
      >
        <div className="flex flex-col justify-evenly items-start w-[80%] md:w-[40%] h-[350px]">
          <div className="w-full md:w-[502px] text-slate-200 text-[64px] font-bold font-['Poppins'] leading-[64px]">
            Get Involved
          </div>
          <div className="w-full md:w-[616px] text-neutral-50 text-[22px] font-normal font-['Poppins'] leading-7 tracking-wide">
            Ready to make a difference? At Green Horizon, we're helping young
            leaders tackle environmental issues. Eager to clean up local parks,
            or committed to reducing e-waste, there's a place for you in our
            community. Contact us if you would like to part of the solution for
            a greener tomorrow.
          </div>
          <div className="w-full md:w-[173px] h-[58px] px-[9px] py-[11px] bg-emerald-600 rounded-xl justify-center items-center gap-2.5 inline-flex">
            <div className="text-black text-2xl font-bold font-['Poppins']">
              Contact Us
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-[80%] md:w-[40%]">
          <Image
            src="/section-four-image.png"
            width={322 * 0.75}
            height={482 * 0.75}
            className="md:w-auto md:h-auto"
            alt="tree svg"
          />
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col justify-evenly items-center w-full bg-custom-section-four h-screen bg-cover bg-center"
      >
        <Image src="/contact-us.png" width={367} height={64} alt="contact us" />
        <div className="max-w-[600px] w-[60%] h-[600px] bg-gray-700 rounded-[30px] shadow flex flex-col justify-evenly items-center lastBoxShadow">
          <div className=" w-[80%] flex items-start justify-center flex-col">
            <div className="text-slate-200 text-[32px] font-semibold font-['Poppins'] leading-loose">
              Name:
            </div>
            <InputBox
              value={name}
              setValue={setName}
              placeHolder="Enter your name"
            />
          </div>

          <div className=" w-[80%] flex items-start justify-center flex-col">
            <div className="text-slate-200 text-[32px] font-semibold font-['Poppins'] leading-loose">
              Email:
            </div>
            <InputBox
              value={email}
              setValue={setEmail}
              placeHolder="Enter your Email"
            />
          </div>

          <div className=" w-[80%] flex items-start justify-center flex-col">
            <div className="text-slate-200 text-[32px] font-semibold font-['Poppins'] leading-loose">
              message:
            </div>
            <InputBoxTwo
              value={message}
              setValue={setMessage}
              placeHolder="Enter your Message"
            />
          </div>

          <div className=" w-[80%] mb-[40px]">
            <button
              className="w-[150px] h-[40px] px-[9px] py-[11px] bg-emerald-600 rounded-xl justify-center items-center gap-2.5 inline-flex"
              onClick={console.log({
                name: name,
                email: email,
                message: message,
              })}
            >
              <div className="text-slate-200 text-[28px] font-bold font-['Poppins']">
                Submit
              </div>
            </button>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-center h-[200px] w-full bg-emerald-950">
        <div className="w-[130px] flex justify-evenly items-center">
          <Image src="/instagram.svg" width={40} height={40} alt="logo" />
          <Image src="/twitter.svg" width={40} height={40} alt="logo" />
          <Image src="/facebook.svg" width={40} height={40} alt="logo" />
        </div>
        <div className="text-neutral-50 text-lg font-semibold font-['Poppins']">
          © 2024 Green Horizon
        </div>
      </footer>
    </main>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center w-full p-3 bg-emerald-950">
      <div className="text-neutral-50 text-lg font-semibold font-['Poppins']">
        Green Horizon
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-neutral-50 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`md:flex md:items-center justify-evenly w-[40%] ${isOpen ? "flex" : "hidden"} flex-col md:flex-row`}
      >
        <Link href="#home">
          <div className="text-neutral-50 text-lg font-semibold font-['Poppins'] p-2">
            Home
          </div>
        </Link>
        <Link href="#mission">
          <div className="text-neutral-50 text-lg font-semibold font-['Poppins'] p-2">
            Our Mission
          </div>
        </Link>
        <Link href="#solutions">
          <div className="text-neutral-50 text-lg font-semibold font-['Poppins'] p-2">
            Solutions
          </div>
        </Link>
        <Link href="#involved">
          <div className="text-neutral-50 text-lg font-semibold font-['Poppins'] p-2">
            Get Involved
          </div>
        </Link>
        <Link href="#contact">
          <div className="text-neutral-50 text-lg font-semibold font-['Poppins'] p-2">
            Contact Us
          </div>
        </Link>
      </div>
    </nav>
  );
}

const InputBox = ({ value, setValue, placeHolder }) => {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeHolder}
      className={`w-full h-[40px] bg-slate-600 rounded-3xl pl-3`}
    />
  );
};

const InputBoxTwo = ({ value, setValue, placeHolder }) => {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeHolder}
      className={`w-full h-[100px] bg-slate-600 rounded-3xl pl-3`}
    />
  );
};
