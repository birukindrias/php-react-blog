import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./output.css";
import store from "./store/index.js";

const container = document.getElementById("root");
const root = createRoot(container);
import { ThemeProvider } from "@material-tailwind/react";

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";
// import AppRoutes from "./routes";
// import { ThemeProvider } from "@material-tailwind/react";

// function App() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//           <ThemeProvider>
//             <App />
//           </ThemeProvider>
//       </BrowserRouter>
//     </Provider>
//   );
// }

// export default App;

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
