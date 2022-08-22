import logo from "./logo.svg";
import "./App.css";

import LargeCard from "./components/LargeCard";
import SmallCard from "./components/SmallCard";

import { useState } from "react";

let largeData = [
  ["@nathanf", "1987", "FOLLOWERS", "12 Today", "./images/icon-facebook.svg"],
  ["@nathanf", "1044", "FOLLOWERS", "99 Today", "./images/icon-twitter.svg"],
  [
    "@realnathanf",
    "11k",
    "FOLLOWERS",
    "1099 Today",
    "./images/icon-instagram.svg",
  ],
  [
    "Nathan F.",
    "8239",
    "Subscribers",
    "144 Today",
    "./images/icon-youtube.svg",
  ],
];
let smallData = [
  ["Page Views", "87", "3%", "./images/icon-facebook.svg"],
  ["Likes", "52", "2%", "./images/icon-facebook.svg"],

  ["Likes", "5462", "2257%", "./images/icon-instagram.svg"],

  ["Profile Views", "52k", "1375%", "./images/icon-instagram.svg"],
  ["Retweets", "117", "303%", "./images/icon-twitter.svg"],
  ["Likes", "507", "553%", "./images/icon-twitter.svg"],
  ["Likes", "107", "19%"],
  ["Total Views", "1407", "12%", "./images/icon-youtube.svg"],
];

function App() {
  let [light, setLight] = useState(false);
  let changeLight = () => {
    let tem = !light;
    setLight(tem);
  };
  return (
    <div className={light ? "app" : "app light-mode"}>
      <div className="App-header">
        <div className="upper">
          <span>Social Media DashBoard</span>{" "}
          <div onClick={changeLight} className="btn-div">
            {" "}
            <div className={light ? "circle" : "circle move-right"}></div>{" "}
          </div>
        </div>
        <div className="totalFollow">TotalFollowers:23004</div>
      </div>
      <div className="Large-cards">
        {largeData.map((data, index) => {
          return <LargeCard key={index} data={data} />;
        })}
      </div>
      <h1 className="Small-head">Overview-Today</h1>
      <div className="Small-cards">
        {smallData.map((data, index) => {
          return <SmallCard key={index} data={data} />;
        })}
      </div>
    </div>
  );
}

export default App;
