import React from "react";
import Loader from "react-loader-spinner";

const FullPageLoader = () => {
  return (
    <div style={{ position: "fixed", left: "50%", top: "50%" }}>
      <Loader
        type="RevolvingDot"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </div >
  );
};

export default FullPageLoader;
