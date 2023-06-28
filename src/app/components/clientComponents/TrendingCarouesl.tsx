"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { trending } from "../../assets/data/data";
import LargeCard from "../shared/LargeCard";

interface TrendingItem {
  id: number;
  name: string;
  tag: string;
  cover: any;
}

const TrendingCarouesl = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <>
        <Slider {...settings}>
          {trending.map((item: TrendingItem, i: number) => (
            <div key={i}>
              <div className="rouned-md">
                <LargeCard cover={item.cover} name={item.name} tag={item.tag} />
              </div>
            </div>
          ))}
        </Slider>
      </>
    </>
  );
};

export default TrendingCarouesl;
