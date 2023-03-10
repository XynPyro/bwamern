import React, { Component } from "react";
import Fade from "react-reveal";

import InputNumber from "../elements/Form/InputNumber";
import InputDate from "../elements/Form/InputDate";
import Breadcrumb from "../elements/Breadcrumb";

export default class Example extends Component {
  render() {
    const breadcrumb = [
      {
        pageTitle: "Home",
        pageHref: ""
      },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrumb data={breadcrumb} className={["breadcrumb"]} />
          </div>
        </div>
      </div>
    );
  }
}
