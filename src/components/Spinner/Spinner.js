import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

import "./Spinner.css";

const Spinner = () => {
  const renderSpinner = () => (
    <div className="spinner">
      <ClipLoader
        loading={true}
        size={200}
        color={"var(--primary-ring-spinner)"}
      />
    </div>
  );

  return <>{renderSpinner()}</>;
};

export default Spinner;
