type IProps = {
  pageType: "business" | "Payment_providers"
  setPageType: React.Dispatch<React.SetStateAction<"business" | "Payment_providers">>
}

const Header = ({pageType, setPageType}: IProps) => {
  return (
    <div className="bg-[#F6F4F4] sticky top-0 left-0 z-[10]">
      <div className="max-w-[1440] mx-auto flex gap-5 items-center px-5 lg:px-10">
        <div
          className={`pt-4 pb-2 border-b-8  cursor-pointer ${
            pageType === "business" ? "border-secondary text-secondary" : "border-transparent"
          }`}
          onClick={() => setPageType("business")}
        >
          For Work & Business
        </div>
        <div
          className={`pt-4 pb-2 border-b-8 cursor-pointer ${
            pageType === "Payment_providers" ? "border-secondary text-secondary" : "border-transparent"
          }`}
          onClick={() => setPageType("Payment_providers")}
        >
          For Payment Providers
        </div>
      </div>
    </div>
  );
};

export default Header;
