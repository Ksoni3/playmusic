"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle, BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { hero1 } from "../../assets/data/data";

interface SampleNextArrowProps {
  onClick: () => void;
}

function SampleNextArrow(props: SampleNextArrowProps) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] left-0 text-white cursor-pointer"
    >
      <MdKeyboardArrowLeft size={50} />
    </div>
  );
}

function SamplePrevArrow(props: SampleNextArrowProps) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-[50%] right-0 z-10 text-white cursor-pointer"
    >
      <MdKeyboardArrowRight size={50} />
    </div>
  );
}

const CarouselComponents = () => {
  const handleNextArrowClick = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrevArrowClick = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow onClick={handleNextArrowClick} />,
    prevArrow: <SamplePrevArrow onClick={handlePrevArrowClick} />,
  };

  return (
    <Slider {...settings} ref={sliderRef}>
      {hero1.map((item) => (
        <div className="box relative h-[92vh] sm:mt-16 " key={item.id}>
          <Image
            src={item.cover}
            alt="cover"
            className="w-full h-full object-cover"
          />
          <div className="text absolute top-0 left-4 text-white p-5">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <span className="text-gray-400">{item.tag}</span>
          </div>
          <div className="overlay icon absolute top-1/2 left-[40%] text-white">
            <BsPlayCircle size={45} className="show" />
            <AiFillPlayCircle
              size={50}
              className="hide absolute -top-1 -left-1"
            />
          </div>
          <div className="overlay absolute bottom-0 right-0 text-white">
            <div className="flex p-3">
              <AiOutlineHeart size={22} className="mx-3" />
              <BsThreeDots size={22} />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselComponents;
