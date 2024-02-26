import React, { useEffect } from "react";
import styles from "./InitialScreen.module.css";

const InitialScreen = (props: any) => {
  const { setShowContent } = props;

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setShowContent();
    }, 5000); // aca controlo el tiempo que lleve que se termine de renderizar la animacion.

    return () => clearTimeout(timeout);
  }, [setShowContent]);

  return <div className={styles.initialScreen}></div>;
};

export default InitialScreen;
