import { Fragment } from "react";
import Banner from "../../components/_shared/Banner";
import Growth from "./components/Growth";
import Description from "./components/Description";
import Beneficiary from "./components/Beneficiary";


const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Growth />
      <Description />
      <Beneficiary />
      
    </Fragment>
  );
};

export default Home;
