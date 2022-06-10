import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Image from "./pages/Image";
import MainHeader from "./components/UI/MainHeader";

function App() {
  return (
    <Fragment>
      <MainHeader/>
      <Routes>
        <Route path="/" element={<Navigate to="/Gallery" />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/About" element={<About />} />
        <Route path="/Image/:albumId/:imgId" element={<Image />} />
      </Routes>
    </Fragment>
  );
}

export default App;
