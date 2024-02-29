// Quote.jsx
import React from "react";
import styles from "./Quote.module.css";

const Quote = () => {
  return (
        <div className={`${styles.textContainer} text-center`}>
          <h1 className="anta text-6xl font-bold text-white mb-10 max-w-[700px]">
            {"Programming isn't about what you"}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{" know; "}</span>
            {"it's about what you can"}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{" figure out"}</span>
          </h1>
        </div>
  );
};

export default Quote;
