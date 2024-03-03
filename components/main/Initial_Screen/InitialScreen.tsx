// InitialScreen.jsx
import React, { useState, useEffect, useCallback } from "react";
import styles from "./InitialScreen.module.css";
import StarsCanvas from "../StarBackground";
import Quote from "./Quote";

const InitialScreen = (props: any) => {
  const { setShowContent } = props;
  const [fadeOutActive, setFadeOutActive] = useState(false);

  const handleSkipIntro = useCallback(() => {
    setFadeOutActive(true);
    setShowContent();
  }, [setShowContent]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      handleSkipIntro();
    }, 5500);

    return () => clearTimeout(timerId);
  }, [handleSkipIntro, setShowContent]);

  return (
    <div className={`${styles.initialScreen} ${fadeOutActive && styles.fadeOut} fade-in`}>
      <div className={styles.topBar}>
      <div className={styles.borderOverlayTop}></div>
      </div>
      <div className={styles.media}>
        <StarsCanvas />
        <Quote />
        {/* <div className={`${styles.modelContainer} w-full h-full`}></div> */}
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.borderOverlayBottom}></div>
        {/* <button
          className={`${styles.skipButton} anta text-6xl font-bold text-white text-center cursor-pointer rounded-lg pl-[10px] pr-[10px] z-[110]`}
          onClick={handleSkipIntro}
        >
          SKIP INTRO
        </button> */}
      </div>
    </div>
  );
};

export default InitialScreen;
