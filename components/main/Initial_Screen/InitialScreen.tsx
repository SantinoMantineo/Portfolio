import React, { useState } from "react";
import styles from "./InitialScreen.module.css";

const InitialScreen = (props: any) => {
  const { setShowContent } = props;
  const [fadeOutActive, setFadeOutActive] = useState(false);

  const handleSkipIntro = () => {
    setFadeOutActive(true);
    setShowContent();
  };

  return (
    <div className={`${styles.initialScreen} ${fadeOutActive && styles.fadeOut} fade-in flex items-center justify-center`}>
      <div className={`${styles.textContainer} text-center`}>
        <h1 className="anta text-6xl font-bold text-white mb-10 max-w-[700px]">"People don't care about what you 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{" "}say</span>
          , they care about what you
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{" "}build</span>"
        </h1>
        <h2 className="Welcome-text text-3xl text-white">- Mark Zuckerberg</h2>
        <button className={`${styles.skipButton} text-6xl font-bold text-white py-2 button-initial text-center cursor-pointer rounded-lg pl-[10px] pr-[10px]`} onClick={handleSkipIntro}>
          SKIP INTRO
        </button>
      </div>
      <div className={`${styles.modelContainer} w-full h-full flex items-center justify-center`}>
        <h1 className="text-white">HolAAAAAAAAAAAAAAa</h1>
      </div>
    </div>
  );
};

export default InitialScreen;
