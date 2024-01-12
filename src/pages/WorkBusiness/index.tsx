import { Fragment } from "react";
import Banner from "../../components/_shared/Banner";
import Growth from "./components/Growth";
import Description from "./components/Description";
import Beneficiary from "./components/Beneficiary";

const Home = () => {
  return (
    <Fragment>
      <Banner
        desc="Discover a match made in payment heaven. We're the Bumble of Business Payments, connecting you with providers whose stacks are just what your business needs!"
        title="Find the Perfect Payment Partner For Your Business!"
      />
      <Growth />
      <Description />
      <Beneficiary />
    </Fragment>
  );
};

export default Home;
