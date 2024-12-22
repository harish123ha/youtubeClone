import video from "../../assets/video.mp4";
import likeIcon from "../../assets/like.png";
import dislikeIcon from "../../assets/dislike.png";
import shareIcon from "../../assets/share.png";
import saveIcon from "../../assets/save.png";
import jackIcon from "../../assets/jack.png";

function PlayVideo({ videoId }) {
  return (
    <>
      <div className="p-4">
        {/* <video src={video} controls autoPlay muted ></video> */}
        <iframe
          className="w-full h-[30rem]"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <h1 className="font-bold text-2xl">
          HELLUVA BOSS - SINSMAS // S2: Episode 12 -FINALE
        </h1>
        <div className="flex justify-between mt-3">
          <div>
            <span className="text-[#5a5a5a]">547k views . </span>
            <span className="text-[#5a5a5a]"> a day agao</span>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-1 text-[#5a5a5a]">
              <img src={likeIcon} alt="" className="w-6 h-6" />
              <span>141k</span>
            </div>
            <div className="flex gap-1 text-[#5a5a5a]">
              <img src={dislikeIcon} alt="" className="w-6 h-6" />
              <span>5</span>
            </div>
            <div className="flex gap-1 text-[#5a5a5a]">
              <img src={shareIcon} alt="" className="w-6 h-6" />
              <span>share</span>
            </div>
            <div className="flex gap-1 text-[#5a5a5a]">
              <img src={saveIcon} alt="" className="w-6 h-6" />
              <span>save</span>
            </div>
          </div>
        </div>
        <hr className="my-3 h-2 text-[#5a5a5a]" />
        <div className="flex justify-between">
          <div className="flex gap-5">
            <div className="w-14">
              <img src={jackIcon} alt="" className="rounded-full" />{" "}
            </div>
            <div>
              <h1 className="font-bold text-xl">Vivziepop</h1>
              <p className="text-[#5a5a5a] text-[0.8rem]">10 M SUBSCRIBERS</p>
            </div>
          </div>
          <div>
            <button className="px-6 py-1 rounded-md bg-[#ff0000] text-white ">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="ms-20">
          <p className="text-[15px] text-[#5a5a5a]">
            It's SINSMAS and things sure do happen. WARNING: for SEASON FINALE
            STYLISH OCCULT, a new world of Helluva Boss apparel and culture is
            here ► http://stylishoccult.com/ HELLUVA BOSS MERCH AVAILABLE ►
            https://sharkrobot.com/vivziepop S1 Episode One ►
          </p>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
}
export default PlayVideo;
