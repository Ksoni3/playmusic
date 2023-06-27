import { MdKeyboardArrowLeft } from "react-icons/md";

const SampleNextArrow: React.FC = () => {
  return (
    <div className="absolute top-[50%] left-0 text-white cursor-pointer">
      <MdKeyboardArrowLeft size={50} />
    </div>
  );
};

export default SampleNextArrow;
