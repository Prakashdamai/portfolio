import React, { useEffect, useState } from "react";


const words = ["HTML","CSS",  "JavaScript", "React"];

export default function Hero() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return(
    <section className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Prakash <span className="text-pink-500">Damai</span>
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-300">
          I’m a Frontend Developer -{" "}
          <span className="text-pink-500 font-semibold">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </p>
      </div>
    </section>
  );
}
