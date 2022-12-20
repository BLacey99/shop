import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Store from "./Store";
import Faq from "./Faq";
import Contact from "./Contact";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/store" element={<Store />} />
        <Route path="/faq" element={<Faq />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;