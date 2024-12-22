import { useParams } from "react-router-dom";
import PlayVideo from "../../COMPONENTS/PLAYVIDEOS/PlayVideo";
import Recommended from "../../COMPONENTS/RECOMMENDED/Recommended";

function Video() {
  const { videoId, categoryId } = useParams();
  console.log(videoId);
  return (
    <>
      <div className="mt-16 flex">
        <div className="w-[65%] border">
          <PlayVideo videoId={videoId} />
        </div>
        <div className="w-[35%] border">
          <Recommended />
        </div>
      </div>
    </>
  );
}
export default Video;
