"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [fortune, setFortune] = useState("");
  const [isSplit, setIsSplit] = useState(false);

  const fortunes = [
    "I am looking for an internship for the summer of 2026.",
    "I love riding the e-bikes in Santa Cruz to the beach and then getting Ice-Cream.",
    "I am a third year at UCSC studying Computer Engineering.",
    "I am on the Gen-AI team in the Tech4Good research lab at UCSC.",
    "I have a passion for technology and its potential to create positive change.",
    "I love collecting stickers and taking notes by hand.",
    "I can speak Cantonese and a little bit of Mandarin.",
    "My go to ice-cream is mint-chocolate chip.",
    "I like painting and creating miniature polymer clay art pieces.",
    "Currently reading The Emperor of Gladness by Ocean Vuong."
  ];

  const handleClick = () => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(randomFortune);
    setIsSplit(true);
  };

  return (
    <div className="font-sans min-h-screen flex flex-col items-center p-8 pb-20 gap-16 sm:p-20">
      <header
        className={`text-4xl sm:text-3xl font-bold text-center sm:text-left ${
          isSplit ? "cursor-pointer hover:text-[#f4d58d] transition-colors" : ""
        }`}
        onClick={() => {
          if (isSplit) {
            setIsSplit(false);
            setFortune("");
          }
        }}
      >
        christina chan
      </header>
      <main className="flex flex-col gap-[32px] items-center justify-center flex-grow w-full">
        <div className="relative flex items-center justify-center h-[200px] w-[300px] mx-auto">
          {!isSplit ? (
            <Image
              src="/fortune-cookie.png"
              alt="fortune cookie"
              width={300}
              height={500}
              className="cursor-pointer hover:scale-105 transition-transform duration-100 ease-in-out"
              onClick={handleClick}
            />
          ) : (
            <>
              {/* The container for the left cookie half */}
              <div className="absolute left-1/2 transform -translate-x-1/2" style={{ zIndex: 2 }}>
                <Image
                  src="/fortune-cookie-left.png"
                  alt="fortune cookie left"
                  width={150}
                  height={250}
                  className="transition-all duration-[5s] ease-in-out translate-x-[-220px]"
                />
              </div>
              {/* The container for the right cookie half */}
              <div className="absolute left-1/2 transform -translate-x-1/2" style={{ zIndex: 2 }}>
                <Image
                  src="/fortune-cookie-right.png"
                  alt="fortune cookie right"
                  width={150}
                  height={250}
                  className="transition-all duration-[5s] ease-in-out translate-x-[220px]"
                />
              </div>
              {fortune && (
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 bg-white border border-gray-300 rounded shadow-md flex flex-col items-center justify-center -mt-20"
                  style={{
                    width: "300px",
                    height: "80px",
                    zIndex: 1,
                    padding: "0.5rem 1rem",
                  }}
                >
                  <span className="text-[#bf0603] font-light text-center text-base">
                    {fortune}
                  </span>
                </div>
              )}
            </>
          )}
        </div>
        <p className="text-center text-xl max-w-md pt-10">
          {isSplit
            ? "hungry for more? click on my name."
            : "click on the cookie to learn about me"}
        </p>
      </main>
      <footer className="flex gap-[24px] flex-wrap items-center justify-center w-full">
        <Link
          href="https://www.linkedin.com/in/christina-chan99/" target="_blank" rel="noopener noreferrer"
          className={`text-xl text-center font-bold ${
          isSplit ? "cursor-pointer hover:text-[#f4d58d] transition-colors" : ""
        }`}
        >
          christinawchan@gmail.com
        </Link>
      </footer>
    </div>
  );
}
