import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Frame123489 = React.lazy(() => import("pages/Frame123489"));
const Frame123488 = React.lazy(() => import("pages/Frame123488"));
const Frame123487 = React.lazy(() => import("pages/Frame123487"));
const Frame123486 = React.lazy(() => import("pages/Frame123486"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frame123486" element={<Frame123486 />} />
          <Route path="/frame123487" element={<Frame123487 />} />
          <Route path="/frame123488" element={<Frame123488 />} />
          <Route path="/frame123489" element={<Frame123489 />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
