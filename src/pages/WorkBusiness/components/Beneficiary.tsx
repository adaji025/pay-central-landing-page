import { Button } from "@mantine/core";
import OverlayImage from "../../../assets/images/texture-bg.png";
import PaymentProviders from "../../../assets/images/payment-provider.png";
import ForWorskImage from "../../../assets/images/for-works.png";
import BusinessOwnersImage from "../../../assets/images/business-owners.png";

type IProps = {
  title1: string;
  title2: string;
  desc: string;
  image: string;
};

const Card = ({ desc, image, title1, title2 }: IProps) => {
  return (
    <div className="flower-bg relative min-h-[340px]">
      <img
        src={OverlayImage}
        alt=""
        className="absolute w-full h-full z-10"
      />
      <div className="mt-10 p-5">
        <div className="font-medium text-2xl">
          <h2>{title1}</h2>
          <h2>{title2}</h2>
        </div>
        <div className="mt-2">{desc}</div>
      </div>
      <img src={image} alt="" className="absolute bottom-0 right-0 z-[1]" />
    </div>
  );
};

const Beneficiary = () => {
  return (
    <div className="mt-20 max-w-[1200px] mx-auto px-5 lg:px-10">
      <div className="flex justify-center">
        <Button className="bg-[#F6F4F4] border-secondary text-secondary">
          Who needs PayCentral
        </Button>
      </div>
      <h2 className="text-[32px] md:text-[40px] text-center font-medium">
        Tailored Benefits for Every Role
      </h2>
      <div className="text-center max-w-[730px] mx-auto">
        At PayCentral, our commitment to excellence extends to every user.
        Whether you're a business owner, developer, Financial Enthusiasts,
        Individuals, or payment provider, we've meticulously tailored benefits
        to streamline your experience.
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card
          desc="The platform facilitates easy cross-border payments, offering diverse currency support and ensuring a smooth and efficient international payment experience."
          image={ForWorskImage}
          title1="For"
          title2="Work"
        />
        <Card
          desc="Optimize payment processing costs through intelligent matchmaking with payment providers, resulting in improved financial efficiency."
          image={BusinessOwnersImage}
          title1="Business"
          title2="Owners"
        />
        <Card
          desc="Gain enhanced visibility and access to businesses seeking their services, expanding their client base and fostering growth opportunities through the PayCentral platform."
          image={PaymentProviders}
          title1="Payment"
          title2="Providers"
        />
      </div>
    </div>
  );
};

export default Beneficiary;
