import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import WorkBusiness from "./components/WorkBusiness";
import PaymentProvider from "./pages/PaymentProvider";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/_shared/Header";
import Footer from "./components/_shared/Footer";
import Waitlist from "./components/_shared/Waitlist";

export default function App() {
  const [pageType, setPageType] = useState<"business" | "Payment_providers">("business");

  return (
    <MantineProvider
      theme={{
        primaryColor: "blue",
        fontFamily: "Spline Sans, sans-serif",
        defaultRadius: 8,
      }}
    >
      <div className="">
        <Header pageType={pageType} setPageType={setPageType} />
      <Navbar />
        <Routes>
          <Route
            path="/*"
            element={pageType === "Payment_providers" ? <PaymentProvider /> : <WorkBusiness />}
          />
        </Routes>
        <Waitlist />
        <Footer />
      </div>
    </MantineProvider>
  );
}
