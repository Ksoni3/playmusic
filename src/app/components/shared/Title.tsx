import React from "react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold mb-5 text-primary">
        {title}
      </h1>
    </>
  );
};

export default Title;
