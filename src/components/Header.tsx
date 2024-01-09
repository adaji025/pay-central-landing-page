import { useState } from "react";

const Header = () => {
  const [pageType, setPageType] = useState<"business" | "personal">("business");
  return (
    <div className="bg-[#F6F4F4]">
      <div className="max-w-[1440] mx-auto flex gap-5 items-center px-5 lg:px-10">
        <div
          className={`pt-3 pb-1 border-b-8  cursor-pointer ${
            pageType === "business" ? "border-secondary text-secondary" : "border-transparent"
          }`}
          onClick={() => setPageType("business")}
        >
          For Work & Business
        </div>
        <div
          className={`pt-3 pb-1 border-b-8 cursor-pointer ${
            pageType === "personal" ? "border-secondary text-secondary" : "border-transparent"
          }`}
          onClick={() => setPageType("personal")}
        >
          For Work & Business
        </div>
      </div>
    </div>
  );
};

export default Header;
