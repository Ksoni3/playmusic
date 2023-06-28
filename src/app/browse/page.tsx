import React from "react";
import LayoutSideBar from "../components/shared/LayoutSideBar";
import { browseSongs } from "../assets/data/data";
import LargeCard from "../components/shared/LargeCard";

const Browser = () => {
  return (
    <>
      <LayoutSideBar>
        <section className="treading hero w-[95%] md:w-11/12 mx-auto md:pl-1 pr-4 md:pr-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-5  text-primary">
            Browse & Play
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:grid-cols-1">
            {browseSongs.map((item, i) => (
              <div className="box card hero" key={i}>
                <LargeCard cover={item.cover} name={item.name} tag={item.tag} />
              </div>
            ))}
          </div>
        </section>
      </LayoutSideBar>
    </>
  );
};

export default Browser;
