import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { generatePath } from "react-router";
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";
import './css/main.css';

import Home from "./Containers";
import Sign_in from "./Containers/Sign_in";
import User from "./Containers/User";
import Header from "./Containers/Header.js";
import Footer from "./Containers/Footer.js";

import store from './Containers/store'
import { Provider } from 'react-redux'

export default function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>

    <Header/>


         <Routes>
            <Route index element={<Home/>} />
            <Route path={'/Sign_in'} element={<Sign_in />} />
            <Route path={'/User'} element={<User />} />
          </Routes>



    <Footer/>


  </BrowserRouter>
  </Provider>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
