import React, { Fragment } from "react";
import "./layouts.scss";
import Menu from "../components/menu";
import Footer from "../components/footer";
import BasicInfo from "../components/basicInfo";

const Layouts = () => {
  return (
    <Fragment>
      <Menu />
      <BasicInfo />
      <Footer />
    </Fragment>
  );
};

export default Layouts;
