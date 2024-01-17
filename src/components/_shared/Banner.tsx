import { FaArrowRight } from "react-icons/fa";
import Peach from "../../assets/images/peach.png";
import SImage from "../../assets/images/s.png";
import MImage from "../../assets/images/m.png";
import Bumba from "../../assets/images/bumba.png";

type IProps = {
  title: string;
  desc: string;
};
const Banner = ({ desc, title }: IProps) => {
  return (
    <div className="max-w-[1440] mx-auto px-5 lg:px-10 relative">
      <div className="banner min-h-[40vh] md:min-h-[calc(100vh-140px)] mt-16 flex flex-col justify-center text-center">
        <h2 className="text-[24px] sm:text-[32px] md:text-[48px] max-w-[800px] mx-auto font-bold text-[#342D2E]">
          {title}
        </h2>
        <h5 className="max-w-[650px] mx-auto md:text-xl">{desc}</h5>
        <div className="flex justify-center mt-5">
          <button
            className="bg-[#E35669] text-white px-4 py-2 flex gap-2 items-center"
            //   onClick={() => setOpenWaitlist(true)}
          >
            <div className="text-xs lg:text-base">Join the waitlist</div>
            <FaArrowRight className="hidden sm:inline" />
          </button>
        </div>

        <img
          src={Peach}
          alt=""
          className="absolute left-10 bottom-20 hidden md:inline w-[50px] xl:hidden"
        />
        <img
          src={MImage}
          alt=""
          className="absolute left-10 top-5 hidden md:inline w-[50px] xl:hidden"
        />
        <img
          src={Bumba}
          alt=""
          className="absolute right-10 top-5 hidden md:inline w-[50px] xl:hidden"
        />
        <img
          src={SImage}
          alt=""
          className="absolute right-10 bottom-20 hidden md:inline w-[50px] xl:hidden"
        />
      </div>
    </div>
  );
};

export default Banner;
