import { Button } from "@mantine/core";

const Growth = () => {
  return (
    <div className="growth">
      <div className="min-h-[300px] max-w-[1440] text-white  mx-auto px-5 lg:px-10 flex flex-col md:flex-row py-10 gap-3 justify-center md:justify-between items-center">
        <div className="md:w-1/2 flex flex-col ">
          <div className="flex justify-center md:justify-start">
            <Button className="bg-white text-primary rounded-md font-normal">
              Magic tool for growth
            </Button>
          </div>
          <div className="mt-5 font-bold text-[24px] lg:text-[40px] max-w-[438px]">
            Super-Smart assistant for businesses
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="max-w-[565px] text-center">
            Imagine having a personal assistant dedicated to finding the best
            payment providers tailored to your business needs. That's PayCentral
            – your trusty sidekick in the world of payments.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
