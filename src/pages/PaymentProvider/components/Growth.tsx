import { Button } from "@mantine/core";

const Growth = () => {
  return (
    <div className="growth">
      <div className="min-h-[300px] max-w-[1440] text-white  mx-auto px-5 lg:px-10 flex flex-col md:flex-row py-10 gap-3 justify-center md:justify-between items-center">
        <div className="flex flex-col ">
          <div className="flex justify-center md:justify-start">
            <Button size="md" className="border border-[#E9E7EE] text-[#E9E7EE] rounded-lg text-sm font-normal">
              Why savvy payment providers choose PayCentral
            </Button>
          </div>
          <div className="mt-5 font-bold text-[24px] lg:text-[40px] text-[#746D6D]">
            At PayCentral, we're not just a platform.
          </div>
          <div className="mt-1 font-bold text-[24px] lg:text-[40px]">
            We're your partner in payment success!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
