import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div className="text-white">
      <Main />
      <Row rowID='1' title="Upcoming" url={requests.upcoming} />
      <Row rowID='2' title="Popular" url={requests.popular} />
      <Row rowID='3' title="Now Playing" url={requests.nowPlaying} />
      <Row rowID='4' title="Top Rated" url={requests.topRated} />

    </div>
  );
};

export default Home;

