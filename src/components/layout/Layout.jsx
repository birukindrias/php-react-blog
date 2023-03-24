import axios from "axios";
import React, { useEffect } from "react";
function Layout(props) {
  return <div className="layout">{props.children}</div>;
}

export default Layout;
