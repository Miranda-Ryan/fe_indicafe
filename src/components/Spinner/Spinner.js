import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ClockLoader from "react-spinners/ClockLoader";

import "./Spinner.css";

const Spinner = ({ type = "clip" }) => {
  const renderSpinner = () => (
    <div className={type === "clip" ? "spinner" : "spinner-with-backdrop"}>
      {type === "clip" ? (
        <ClipLoader
          loading={true}
          size={200}
          color={"var(--primary-ring-spinner)"}
        />
      ) : (
        <ClockLoader
          loading={true}
          size={200}
          color={"var(--primary-ring-spinner)"}
        />
      )}
    </div>
  );

  return <>{renderSpinner()}</>;
};

export default Spinner;
