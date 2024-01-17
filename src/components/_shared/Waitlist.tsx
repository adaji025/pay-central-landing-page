import { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa";
import WaitlistModal from "./WaitlistModal";
import { useDisclosure } from "@mantine/hooks";

const Waitlist = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Fragment>
      <WaitlistModal opened={opened} close={close} />
      <div className="max-w-[1200px] mx-auto px-5 lg:px-10 mt-20 flex gap-5 flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2">
          <div className="max-w-[500px] mx-auto md:mx-[unset] text-center md:text-start">
            <h2 className="text-[24px] md:text-[32px] font-semibold max-w-[450px]">
              Join the payment network you've been waiting for!
            </h2>
            <div className="mt-2">
              Our mission is to empower businesses worldwide by connecting them
              with the payment infrastructures needed to succeed in their
              businesses!
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div>
            <button
              className="bg-[#E35669] text-white px-4 py-2 flex gap-2 items-center"
              onClick={open}
            >
              <div className="text-xs lg:text-base">Join the waitlist</div>
              <FaArrowRight className="hidden sm:inline" />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Waitlist;
