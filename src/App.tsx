import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Header from "./components/Header";

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
      </div>
    </MantineProvider>
  );
}
