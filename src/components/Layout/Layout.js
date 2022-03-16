import React from "react";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import "./Layout.css";

const Layout = (props) => {
  const renderLayout = () => (
    <div className="layout">
      <Navbar />
      <Main title={props.title} background={props.background} backdrop={props.backdrop}>
        {props.children}
      </Main>
      <Footer />
    </div>
  );

  return <>{renderLayout()}</>;
};

export default Layout;
