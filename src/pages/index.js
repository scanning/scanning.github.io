import "../style.css";

import { Helmet } from "react-helmet";
import Info from "../components/info";
import React from "react";

function index() {
  return (
    <div>
      <Info />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | s.cann.i.ng</title>
        <script async src="//cdn.splitbee.io/sb.js" />
      </Helmet>
    </div>
  );
}

export default index;
