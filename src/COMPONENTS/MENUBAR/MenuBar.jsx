import home_icon from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles_icon from "../../assets/automobiles.png";
import sports_icon from "../../assets/sports.png";
import entertainment_icon from "../../assets/entertainment.png";
import tech_icon from "../../assets/tech.png";
import music_icon from "../../assets/music.png";
import blogs_icon from "../../assets/blogs.png";
import news_icon from "../../assets/news.png";
import jack_icon from "../../assets/jack.png";
import simon_icon from "../../assets/simon.png";
import tom_icon from "../../assets/tom.png";
import megan_icon from "../../assets/megan.png";
import gerard_icon from "../../assets/gerard.png";
import "./MenuBar.css";

function MenuBar({ sidebar, setCategory, category }) {
  // console.log(category);
  return (
    <>
      <div
        className={`menu_width ${sidebar ? "" : "small_menu_width"}
            mt-[5rem] ml-4  max-h-fit fixed top-0 `}
      >
        <div
          onClick={() => setCategory(0)}
          className="flex items-center flex-wrap   gap-5 mt-2"
        >
          <img src={home_icon} alt="" className=" small-size1 w-[1.7rem]" />
          <h3 className="small-size2  text-xl cursor-pointer font-normal">
            Home
          </h3>
        </div>
        <div
          onClick={() => setCategory(20)}
          className="flex items-center flex-wrap gap-5 mt-3"
        >
          <img src={game_icon} alt="" className="small-size1 w-[1.7rem]" />
          <h3 className="small-size2  text-xl cursor-pointer font-normal">
            Games
          </h3>
        </div>
        <div
          onClick={() => setCategory(2)}
          className="flex items-center flex-wrap gap-5 mt-3"
        >
          <img
            src={automobiles_icon}
            alt=""
            className="small-size1 w-[1.7rem]"
          />
          <h3 className="small-size2  text-xl cursor-pointer font-normal">
            Automobiles
          </h3>
        </div>
        <div
          onClick={() => setCategory(17)}
          className="flex items-center flex-wrap gap-5 mt-3"
        >
          <img src={sports_icon} alt="" className="small-size1 w-[1.7rem]" />
          <h3 className="small-size2  text-xl cursor-pointer font-normal">
            Sports
          </h3>
        </div>
        <div
          onClick={() => setCategory(24)}
          className="flex items-center flex-wrap gap-5 mt-3"
        >
          <img
            src={entertainment_icon}
            alt=""
            className="small-size1 w-[1.7rem]"
          />
          <h3 className="small-size2  text-xl cursor-pointer font-normal">
            Entertainment
          </h3>
        </div>
        <div
          onClick={() => setCategory(28)}
          className="flex items-center flex-wrap gap-5 mt-3"
        >
          <img src={tech_icon} alt="" className="small-size1 w-[1.7rem]" />
          <h3 className="small-size2  text-xl cursor-pointer font-normal">
            Technology
          </h3>
        </div>
        <div
          onClick={() => setCategory(10)}
          className="flex items-center flex-wrap gap-5 mt-3"
        >
          <img src={music_icon} alt="" className="small-size1 w-[1.7rem]" />
          <h3 className="small-size2  text-xl cursor-pointer font-normal">
            Music
          </h3>
        </div>
        <div
          onClick={() => setCategory(22)}
          className="flex items-center flex-wrap gap-5 mt-3"
        >
          <img src={blogs_icon} alt="" className="small-size1 w-[1.7rem]" />
          <h3 className="small-size2  text-xl cursor-pointer font-normal">
            Blogs
          </h3>
        </div>
        <div
          onClick={() => setCategory(25)}
          className="flex items-center flex-wrap gap-5 mt-3"
        >
          <img src={news_icon} alt="" className="small-size1 w-[1.7rem]" />
          <h3 className="small-size2  text-xl cursor-pointer font-normal">
            Home
          </h3>
        </div>
        <hr className=" border-[1px] my-3" />
        <h3 className="text-[#5A5A5A] font-semibold">SUBSCRIBED</h3>
        {/* AFTER SUBSCRIBED */}
        <div className="flex items-center flex-wrap gap-5 mt-4">
          <img
            src={jack_icon}
            alt=""
            className="small-size1 w-[1.7rem] rounded-full "
          />
          <h3 className="small-size2  text-xl cursor-pointer font-normal">
            PewDiePie
          </h3>
        </div>
        <div className="flex items-center flex-wrap gap-5 mt-3">
          <img
            src={simon_icon}
            alt=""
            className="small-size1 w-[1.7rem] rounded-full"
          />
          <h3 className="small-size2  text-xl cursor-pointer font-normal">
            MrBeast
          </h3>
        </div>
        <div className="flex items-center flex-wrap gap-5 mt-3">
          <img
            src={tom_icon}
            alt=""
            className="small-size1 w-[1.7rem] rounded-full"
          />
          <h3 className="small-size2  text-xl cursor-pointer font-normal">
            5-Minute Crafts
          </h3>
        </div>
        <div className="flex items-center flex-wrap gap-5 mt-3">
          <img
            src={megan_icon}
            alt=""
            className="small-size1 w-[1.7rem] rounded-full"
          />
          <h3 className="small-size2  text-xl cursor-pointer font-normal">
            justien Bieber
          </h3>
        </div>
        <div className="flex items-center flex-wrap gap-5 mt-3">
          <img
            src={gerard_icon}
            alt=""
            className="small-size1 w-[1.7rem] rounded-full"
          />
          <h3 className="small-size2  text-xl cursor-pointer font-normal">
            Nas Daily
          </h3>
        </div>
      </div>
    </>
  );
}
export default MenuBar;
