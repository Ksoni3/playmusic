import React from "react";
import { recommend } from "@/app/assets/data/data";
import SmallCard from "../shared/SmallCard";
import Title from "../shared/Title";

const Recommendation: React.FC = () => {
  return (
    <div className="w-11/12 mx-auto">
      <section className="treading hero mt-8">
        <Title title="Recommended for you" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {recommend.map((item, i) => (
            <SmallCard
              key={i}
              cover={item.cover}
              name={item.name}
              tag={item.tag}
              i={i}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Recommendation;
