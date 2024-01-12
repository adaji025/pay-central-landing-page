import { Route, Routes } from "react-router-dom";
import Home from ".";

const Personal = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default Personal
