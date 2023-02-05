import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import About from './components//About';
import Location from './components//Location';
import Login from './components//Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-toastify/dist/ReactToastify.css';

import * as PropTypes from "prop-types";
import Registration from "./components/Registration";

function Switch() {
    return null;
}

Switch.propTypes = {children: PropTypes.node};
const App = () => {
  return (
      <>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}   />
          <Route path="/Location" element={<Location/>} />
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Login/>} />
      </Routes>
      </>
  );
};
export default App;
