import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import Navbar from "./components/business/Navbar/Navbar";
import Banner from "./components/Banner";

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
      </div>
    </MantineProvider>
  );
}
