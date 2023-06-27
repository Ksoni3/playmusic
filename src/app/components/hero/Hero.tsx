import React from "react";
import { AiFillPlayCircle, AiOutlineHeart } from "react-icons/ai";
import { BsPlayCircle, BsThreeDots } from "react-icons/bs";
import { hero1, hero2 } from "../../assets/data/data";
import Image from "next/image";
import CarouselComponents from "../clientComponents/CarouselComponents";

interface HeroItem {
  id: number;
  cover: any;
  name: string;
  tag: string;
}

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className=" -mt-16 md:mt-0  md:h-[92vh] md:flex md:justify-between">
        <div className=" h-full md:w-1/2">
          <CarouselComponents />
        </div>
        <div className="w-full md:w-1/2 -mt-2 md:mt-0 grid grid-cols-2 h-full sm:grid-cols-1">
          {hero2.map((item: HeroItem) => (
            <div key={item.id} className="box relative">
              <Image
                src={item.cover}
                alt="cover"
                height={200}
                width={200}
                className="w-full h-full  object-cover"
              />
              <div className="text absolute top-0 left-0 text-white p-5">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <span className="text-gray-400">{item.tag}</span>
              </div>
              <div className="overlay icon absolute top-1/2 left-[40%] text-white ">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
