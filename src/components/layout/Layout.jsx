import React from "react";
import TopNav from "./TopNav";
function Layout(props) {
  return <div className="layout"><TopNav/>{props.children}</div>;
}

export default Layout;
