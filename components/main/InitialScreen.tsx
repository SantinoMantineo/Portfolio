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
    <div
      className={`${styles.initialScreen} ${fadeOutActive && styles.fadeOut} fade-in flex items-center justify-center`}
    >
      <div className="text-center">
        {/* Contenido de tu animación aquí */}
        <h1 className="anta text-7xl font-bold text-white mb-10">"The only way to do great work is to love what you do"</h1>
        <h2 className="Welcome-text text-3xl text-white">- Steve Jobs</h2>
        <button className={`${styles.skipButton} text-6xl font-bold text-white`} onClick={handleSkipIntro}>
          SKIP INTRO
        </button>
      </div>
    </div>
  );
};

export default InitialScreen;
