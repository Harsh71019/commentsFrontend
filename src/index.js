import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/base/Navbar";
import PrivateRoute from "./components/base/PrivateRoutes";
import jwtDecode from "jwt-decode";
import store from "./store";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import toast, { Toaster } from "react-hot-toast";

ReactDOM.render(
  <Provider store={store}>
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        style: {
          marginTop: "80px",
          marginRight: "30px",
        },
      }}
    />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
