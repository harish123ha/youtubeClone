import menu_icon from "../../assets/menu.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import jack_icon from "../../assets/jack.png";
import logo_icon from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar({ setSidebar }) {
  return (
    <>
      <nav>
        <div className="bg-gray-50 navbar fixed top-0 w-screen flex justify-between items-center p-5 max-h-16 border ">
          <div className="flex justify-center gap-4 items-center">
            <img
              src={menu_icon}
              alt=""
              className="w-7 hide hide2"
              onClick={() =>
                setSidebar((prev) => (prev === false ? true : false))
              }
            />
            <Link to="/">
              {" "}
              <img src={logo_icon} alt="" className="w-[5rem] sm:w-[7rem] " />
            </Link>
          </div>

          <div>
            <div className="flex justify-center items-center search-bar">
              <input
                type="text"
                placeholder="search"
                className="w-[10rem] sm:w-[16rem] md:w-[20rem] lg:w-[25rem] xl:w-[30rem] 2xl:w-[55rem]"
              />
              <img src={search_icon} alt="" />
            </div>
          </div>

          <div className="flex gap-5 justify-center items-center">
            <img src={upload_icon} alt="" className="w-8  hide" />
            <img src={more_icon} alt="" className="w-8 hide" />
            <img src={notification_icon} alt="" className="w-8 hide" />
            <img src={jack_icon} alt="" className="w-8 sm:w-11 rounded-full" />
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
