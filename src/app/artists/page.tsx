import React from "react";
import Image from "next/image";
import { browseSongs } from "../assets/data/data";
import LargeCard from "../components/shared/LargeCard";

const Artists: React.FC = () => {
  return (
    <div>
      <section className="mt-8 w-11/12 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-5 text-primary">
          Artists
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 sm:grid-cols-1">
          {browseSongs.map((item, i) => (
            <div className="box card" key={i}>
              <div className="img relative h-52 w-52 mx-auto">
                <Image
                  src={item.cover}
                  alt="cover"
                  height={200}
                  width={200}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-md text-gray-500 font-semibold">
                  {item.name}
                </h3>
                <span className="text-gray-400">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Artists;
