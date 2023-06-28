import React from "react";
import { browseSongs } from "../assets/data/data";
import SmallCard from "../components/shared/SmallCard";

const Charts: React.FC = () => {
  return (
    <>
      <section className="treading hero mt-6  w-11/12 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-5 text-primary">
          Charts
        </h1>
        <div className="grid grid-cols-1 gap-5">
          {browseSongs.map((item, i) => (
            <div className="box card hero" key={i}>
              <SmallCard
                cover={item.cover}
                name={item.name}
                tag={item.tag}
                i={i}
                show={true}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Charts;
