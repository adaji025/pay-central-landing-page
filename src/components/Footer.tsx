import { Fragment } from "react";
import posthog from "posthog-js";
import { Cookies } from "./Cookies";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Fragment>
      <div className="max-w-[1400px] px-5 lg:px-10 py-[24px] lg:py-[76px] w-full bg-white grid gap-5 lg:grid-cols-2 xl:grid-cols-5 items-center justify-evenly text-center xl:text-left ">
        <div className="block xl:col-span-2 xl:flex gap-4">
          <h2 className="font-bold flex text-[24px] text-[#332C2D] mb-5 xl:mb-[unset]">
            PayCentral <span className="font-medium">®</span>
          </h2>
          <p className="text-sm max-w-[397px] leading-[22px] text-[#4C4848] mx-auto xl:mx-0">
            Curate and tailor payment methods based on your industry,
            preferences, and global transactions.
          </p>
        </div>

        <div className="flex justify-center gap-[24px] px-[18px] border-[#919191] border-x-[1px] text-sm  text-[#4C4848]">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookie</p>
        </div>

        <div>
          <p className="text-sm text-[#4C4848]">
            For questions: paycentral@info.com
          </p>
        </div>

        <div className="flex gap-[24px] px-[24px] justify-center">
          <FaSquareInstagram size={24} color="black" />
          <FaLinkedin size={24} color="black" />
          <FaXTwitter size={24} color="black" />
        </div>
      </div>
      {posthog.has_opted_in_capturing() ||
      posthog.has_opted_out_capturing() ? null : (
        <Cookies />
      )}
    </Fragment>
  );
};

export default Footer;
