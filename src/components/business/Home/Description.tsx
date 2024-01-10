import StarImage from "../../../assets/images/star.png";
import BallImage from "../../../assets/images/ball.png";
import ChainImage from "../../../assets/images/3d-chain.png";
import ArrowImage from "../../../assets/images/3d-arrow.png";
import GroupOtionImage from "../../../assets/images/group-payment-option.png";
import IndustryImage from "../../../assets/images/industry-specific.png";

type IProps = {
  img: string;
  title: string;
  title2: string;
  desc: string;
};

const Description = () => {
  return (
    <div className="max-w-[1440] mx-auto px-5 lg:px-10 mt-20 pb-10">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[40%]">
          <Verified
            desc="Choose PayCentral for Verified Payment Providers. Our carefully vetted
                network ensures that you partner with trusted and reliable payment
                providers, offering you peace of mind with every transaction."
            img={StarImage}
            title="Verified Providers"
            title2="Global Payment Confidence"
          />
        </div>
        <div className="lg:w-[60%}">
          <MagicTool />
        </div>
      </div>

      <div className="flex flex-col mt-10 lg:flex-row gap-5">
        <div className="w-full lg:w-[60%]">
          <IndustrySpecific />
        </div>
        <div className="lg:w-[40%]">
          <Verified
            desc="At PayCentral, we've taken care of the heavy lifting for you. Our curated curation layer simplifies access to the finest global payment providers—all within one ecosystem, one contract, and one API."
            img={BallImage}
            title="Simplify, Scale, Soar"
            title2="Streamlined Global Payments"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mt-10">
        <div className="w-full lg:w-[40%]">
          <Verified
            desc="At PayCentral, we've taken care of the heavy lifting for you. Our curated curation layer simplifies access to the finest global payment providers—all within one ecosystem, one contract, and one API."
            img={ArrowImage}
            title="Simplify, Scale, Soar"
            title2="Streamlined Global Payments"
          />
        </div>
        <div className="w-full lg:w-[60%]">
          <Verified
            desc="At PayCentral, we've taken care of the heavy lifting for you. Our curated curation layer simplifies access to the finest global payment providers—all within one ecosystem, one contract, and one API."
            img={ChainImage}
            title="Simplify, Scale, Soar"
            title2="Streamlined Global Payments"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;

export const Verified = ({ desc, img, title, title2 }: IProps) => {
  return (
    <div className="relative w-full texture-bg min-h-[320px] lg:min-h-[400px] xl:min-h-[320px]">
      <img src={img} alt="" className="absolute right-10 top-0 w-[150px]" />
      <div className="pt-32 px-5">
        <h3 className="text-sm text-primary">{title}</h3>
        <h2 className="mt-3 text-2xl font-semibold text-[#746D6D]">{title2}</h2>
        <div className="mt-3 max-w-[400px] text-secondary">{desc}</div>
      </div>
    </div>
  );
};

export const MagicTool = () => {
  return (
    <div className="texture-bg min-h-[320px] lg:min-h-[400px] xl:min-h-[320px] w-full px-5 py-5 flex justify-between gap-10">
      <div className="flex flex-col justify-end">
        <h3 className="text-sm text-primary">Verified Providers</h3>
        <h2 className="mt-3 text-2xl font-semibold text-secondary">
          Global Payment Confidence
        </h2>
        <div className="mt-3 max-w-[400px] text-[#746D6D]">
          Choose PayCentral for Verified Payment Providers. Our carefully vetted
          network ensures that you partner with trusted and reliable payment
          providers, offering you peace of mind with every transaction.
        </div>
      </div>
      <div>
        <img src={GroupOtionImage} alt="" />
      </div>
    </div>
  );
};

export const IndustrySpecific = () => {
  return (
    <div className="relative texture-bg min-h-[320px] lg:min-h-[400px] xl:min-h-[320px] w-full px-5 py-5 flex items-center justify-between gap-10">
      <div className="flex flex-col">
        <h3 className="text-sm text-primary">Verified Providers</h3>
        <h2 className="mt-3 text-2xl font-semibold text-secondary">
          Global Payment Confidence
        </h2>
        <div className="mt-3 max-w-[400px] text-[#746D6D]">
          Choose PayCentral for Verified Payment Providers. Our carefully vetted
          network ensures that you partner with trusted and reliable payment
          providers, offering you peace of mind with every transaction.
        </div>
      </div>
      <img src={IndustryImage} alt="" className="absolute right-0 bottom-0" />
    </div>
  );
};
