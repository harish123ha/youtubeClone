import "./Video.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { viewsFix } from "../../data";
import { apikey } from "../../data.js";
import React from "react";
import moment from "moment";

export default function Video({ category, setCategory }) {
  const [youtubeData, setYoutubeData] = useState([]);
  console.log(category);

  const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${apikey}`;
  const fetchData = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setYoutubeData(jsonResponse.items);
  };
  useEffect(() => {
    fetchData();
    console.log(youtubeData);
  }, [category]);
  return (
    <>
      <div class="feed">
        {youtubeData.map((data, index) => (
          <Link key={index} to={`video/${data.snippet.channelId}/${data.id}`}>
            <div class="rounded-lg">
              <img
                src={data.snippet.thumbnails.medium.url}
                alt=""
                className="rounded-lg h-40 w-full"
              />
              <h1 className="text-[#000000] font-bold text-xl">
                {data.snippet.title}
              </h1>
              <h5 className="text-[#555555] font-bold">
                {data.snippet.channelTitle}
              </h5>
              <span className="text-[#5a5a5a]">
                {viewsFix(data.statistics.viewCount)}
              </span>
              <span className="text-[#5a5a5a]">
                {" "}
                {moment(data.snippet.publishedAt).fromNow()}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
