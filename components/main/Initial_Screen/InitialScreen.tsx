// InitialScreen.jsx
import React, { useState, useEffect } from "react";
import styles from "./InitialScreen.module.css";
import StarsCanvas from "../StarBackground";

const InitialScreen = (props: any) => {
  const { setShowContent } = props;
  const [fadeOutActive, setFadeOutActive] = useState(false);

  const handleSkipIntro = () => {
    setFadeOutActive(true);
    setShowContent();
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      handleSkipIntro();
    }, 10100);

    return () => clearTimeout(timerId);
  }, [setShowContent]);

  return (
    <div className={`${styles.initialScreen} ${fadeOutActive && styles.fadeOut} fade-in`}>
      <div className={styles.topBar}></div>
      <div className={styles.media}>
        <StarsCanvas />
        <div className={`${styles.textContainer} text-center`}>
          <h1 className="anta text-6xl font-bold text-white mb-10 max-w-[700px]">
            "Programming isn't about what you
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{" "}know;{" "}</span>
            it's about what you can
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{" "}figure out</span>"
          </h1>
          <h2 className="Welcome-text text-3xl text-white">- Chris Pine</h2>
        </div>
        {/* <div className={`${styles.modelContainer} w-full h-full`}>
        </div> */}
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.borderOverlay}></div>
        <button
          className={`${styles.skipButton} anta text-6xl font-bold text-white text-center cursor-pointer rounded-lg pl-[10px] pr-[10px] z-[110]`}
          onClick={handleSkipIntro}
        >
          SKIP INTRO
        </button>
      </div>
    </div>
  );
};

export default InitialScreen;
