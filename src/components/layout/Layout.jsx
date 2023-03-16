import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Layout(props) {
   
  return (
    <div className="layout">
      {/* Add any other elements or components that should be included in your layout */}
      {props.children}
    </div>
  );
}

export default Layout;
