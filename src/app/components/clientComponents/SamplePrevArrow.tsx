import { MdKeyboardArrowRight } from "react-icons/md";

// interface SampleArrowProps {
//   onClick: () => void;
// }

const SamplePrevArrow: React.FC = () => {
  return (
    <div className="absolute top-[50%] right-0 z-10 text-white cursor-pointer">
      <MdKeyboardArrowRight size={50} />
    </div>
  );
};

export default SamplePrevArrow;
