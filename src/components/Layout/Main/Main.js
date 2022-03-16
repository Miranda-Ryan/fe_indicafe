import React from "react";
import "./Main.css";

const Main = (props) => {
  const { children, background, backdrop, title } = props;

  const renderMain = () => {
    let cssClass = "main";

    if (background) {
      cssClass = "main-background";
    }

    return (
      <div className={cssClass}>
        <div
          className={backdrop ? "backdrop container-fluid" : "container-fluid"}
        >
          <h2
            style={{
              color: backdrop
                ? "var(--primary-white)"
                : "var(--primary-brick-red)",
              fontWeight: "bold"
            }}
          >
            {title}
          </h2>
          {children}
        </div>
      </div>
    );
  };

  return <>{renderMain()}</>;
};

export default Main;
