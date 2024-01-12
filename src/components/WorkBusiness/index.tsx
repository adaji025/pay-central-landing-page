import { Route, Routes } from "react-router-dom";
import Home from "../../pages/WorkBusiness";

const Business = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Business;
