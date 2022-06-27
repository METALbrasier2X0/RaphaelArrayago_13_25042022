import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { generatePath } from "react-router";
import Container from 'react-bootstrap/Container';

import { BrowserRouter, Routes, Route, Link, useHistory, useLocation, Redirect } from "react-router-dom";
import './css/main.css';

import Home from "./Containers";
import Sign_in from "./Containers/Sign_in";
import Sign_up from "./Containers/Sign_up";
import User from "./Containers/User";
import Header from "./Containers/Header.js";
import Footer from "./Containers/Footer.js";

import store from './Containers/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

export default function App() {

  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>

    <Header/>


         <Routes>
            <Route index element={<Home/>} />
            <Route path={'/Sign_up'} element={<Sign_up />} />
            <Route path={'/Sign_in'} element={<Sign_in />} />
            <Route path={'/User'} element={<User />} />
          </Routes>



    <Footer/>


  </BrowserRouter>
  </PersistGate>
  </Provider>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
