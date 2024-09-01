import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = ({ strings }) => {
  return (
    <Typewriter
      options={{
        strings: strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;