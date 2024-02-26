import React, { useState } from "react";
import styles from "./InitialScreen.module.css";

const InitialScreen = (props: any) => {
  const { setShowContent } = props;
  const [fadeOutActive, setFadeOutActive] = useState(false);

  // que haya una animacion, estimar el tiempo y hacer que transcurrido el tiempo se avance a la home page.

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
        <button className={`${styles.skipButton} text-6xl font-bold text-white"`} onClick={handleSkipIntro}>
          SKIP INTRO
        </button>
      </div>
    </div>
  );
};

export default InitialScreen;
