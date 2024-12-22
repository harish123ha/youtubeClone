import axios from "axios";

function Test() {
  const api = "AIzaSyB3RB5QUB09BSPNIsrsRMviF_wfoZAtFzU";
  const apikey = "AIzaSyCKtNFQbfmHRF4VcqfXmklFnHiJJp7pkMk";
  const url = `https://www.googleapis.com/youtube/v3/videos&key&${apikey}`;
  const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&videoCategoryId=20&key=${apikey}`;
  const urll = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatus%2Clocalizations&key=${apikey}`;

  const fetchData = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    // setJokes({ jokeContent: jsonResponse.jokeContent });
  };
  fetchData();

  return (
    <>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="bg-red-500">Item 1</div>
        <div class="bg-blue-500">Item 2</div>
        <div class="bg-green-500">Item 3</div>
        <div class="bg-yellow-500">Item 4</div>
        <div class="bg-purple-500">Item 5</div>
        <div class="bg-pink-500">Item 6</div>
      </div>
    </>
  );
}
export default Test;
