import React, { useEffect, useState } from "react";

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prevText) => prevText + text.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
    t;
  }, [text]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
