import React from "react";
import AlertButton from "./AlertButton";

const Toolbar = () => {
  return (
    <div style={styles.toolbar}>
      <AlertButton message="Button 1 has been clicked.">
        Button 1
      </AlertButton>
      <AlertButton message="Button 2 has been clicked">
        Button 2
      </AlertButton>
    </div>
  );
};

const styles = {
    toolbar: {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      marginTop: "20px",
    },
  };

export default Toolbar;
