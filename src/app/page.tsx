import Image from "next/image";
import Hero from "./components/hero/Hero";
import Trending from "./components/hero/Trending";
import LayoutSideBar from "./components/hero/LayoutSideBar";
import Latest from "./components/hero/Latest";
import Recommand from "./components/hero/Recommendation";

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <LayoutSideBar>
          <Trending />
          <Latest />
          <Recommand />
        </LayoutSideBar>
      </div>

      <h1> Kamal SOni</h1>
    </>
  );
}
