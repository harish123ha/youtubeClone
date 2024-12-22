import { useState } from "react";
import MenuBar from "../../COMPONENTS/MENUBAR/MenuBar";
import Video from "../../COMPONENTS/VIDEO/Video";
import "./Home.css";

export default function Home({ sidebar }) {
  const [category, setCategory] = useState(0);
  return (
    <>
      <MenuBar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-sidebar"}`}>
        <Video category={category} setCategory={setCategory} />
      </div>
    </>
  );
}
