import { BrowserRouter, Route, Routes } from "react-router-dom";

import WebsiteBase from "./Pages/website/Base";
import Home from "./Pages/website/Home";
import About from "./Pages/website/About";
import Services from "./Pages/website/Services";
import Contact from "./Pages/website/Contact";
import Team from "./Pages/website/include/Team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Web Routes */}
        <Route path="/" element={<WebsiteBase><Home /></WebsiteBase>} />
        <Route path="/about" element={<WebsiteBase><About title="Personal information" /></WebsiteBase>} />
        <Route path="/services" element={<WebsiteBase><Services title="Services" /></WebsiteBase>} />
        <Route path="/contact" element={<WebsiteBase><Contact title="Contact Us" /></WebsiteBase>} />
        <Route path="/team" element={<WebsiteBase><Team title="Our Team" /></WebsiteBase>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
