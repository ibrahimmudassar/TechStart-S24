import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/truebillai";
import PricingPage from "@/pages/pricing";
import AboutPage from "@/pages/about";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/truebillai" />
      <Route element={<PricingPage />} path="/pricing" />
      {/* <Route element={<BlogPage />} path="/blog" /> */}
      <Route element={<AboutPage />} path="/about" />
      <Route path="/hospitals">
        <Route element={<AboutPage />} path="*" />
      </Route>
    </Routes>
  );
}

export default App;
