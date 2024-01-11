import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import Navbar from "./components/business/Navbar/Navbar";
import Banner from "./components/Banner";
import Growth from "./components/business/Home/Growth";
import Description from "./components/business/Home/Description";
import Beneficiary from "./components/business/Home/Beneficiary";
import Waitlist from "./components/business/Home/Waitlist";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MantineProvider
      theme={{
        primaryColor: "blue",
        fontFamily: "Spline Sans, sans-serif",
        defaultRadius: 8,
      }}
    >
      <div className="">
        <Header />
        <Navbar />
        <Banner />
        <Growth />
        <Description />
        <Beneficiary />
        <Waitlist />
        <Footer />
      </div>
    </MantineProvider>
  );
}
