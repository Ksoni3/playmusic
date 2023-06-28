import React from "react";
import Title from "../shared/Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendingCarouesl from "../clientComponents/TrendingCarouesl";

const Trending = () => {
  return (
    <section className="treading hero">
      <div className="w-11/12 mx-auto pt-5 md:pt-10">
        <Title title="Trending" />
        <TrendingCarouesl />
      </div>
    </section>
  );
};

export default Trending;
