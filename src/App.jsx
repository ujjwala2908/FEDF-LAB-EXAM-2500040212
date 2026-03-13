import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./exam/Navbar";
import Home from "./exam/Home";
import Register from "./exam/Register";
import CourseList from "./exam/CourseList";
import ApiData from "./exam/ApiData";
import PageNotFound from "./exam/PageNotFound";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/api" element={<ApiData />} />

        <Route path="*" element={<PageNotFound />} />

      </Routes>

    </Router>
  );
}

export default App;