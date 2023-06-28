import React from "react";
import LayoutSideBar from "../components/hero/LayoutSideBar";
import { browseSongs } from "../assets/data/data";
import LargeCard from "../components/shared/LargeCard";

const Browser = () => {
  return (
    <>
      <LayoutSideBar>
        <section className="treading hero w-auto mr-4 md:ml-7 md:mt-8">
          <h1 className="text-5xl font-bold mb-5  text-primary">Browse</h1>
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
