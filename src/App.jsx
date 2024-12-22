import { useState } from "react";
import "./App.css";
import Navbar from "./COMPONENTS/NAVBAR/Navbar";
import Home from "./PAGES/HOME/Home";
import { Route, Routes } from "react-router-dom";
import Test from "./Test";
import Video from "./PAGES/VIDEO/Video";

function App() {
  const [sidebar, setSidebar] = useState(true);
  console.log(sidebar);
  return (
    <>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
      {/* <Test /> */}
    </>
  );
}

export default App;
