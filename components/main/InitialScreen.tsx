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
      className={`${styles.initialScreen} ${fadeOutActive && styles.fadeOut}`}
    >
      <div>
        {/* Contenido de tu animación aquí */}
        <button className={styles.skipButton} onClick={handleSkipIntro}>
          Skip Intro
        </button>
      </div>
    </div>
  );
};

export default InitialScreen;
