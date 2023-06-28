import React from "react";
import { latestSongs } from "../../assets/data/data";
import LargeCard from "../shared/LargeCard";
import Title from "../shared/Title";

const Latest = () => {
  return (
    <section className="trending hero">
      <div className="w-11/12 mx-auto pt-5 md:pt-10 md:pr-10">
        <Title title="Latest" />
        <div className=" grid md:grid-cols-4 gap-8">
          {latestSongs.map((item, i) => (
            <div className="box card hero w-[90%]" key={i}>
              <LargeCard cover={item.cover} name={item.name} tag={item.tag} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Latest;
