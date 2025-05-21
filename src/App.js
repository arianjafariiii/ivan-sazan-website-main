import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.component";
import Home from "./routes/home-page";
import Layout from "./components/navbr-layout";
import Footer from "./components/footer-home.component";
import Projects from "./routes/projects-page";
import ProjectDetails from "./routes/project-detail-page";
import AboutUS from "./routes/about-us-page";
import ContactUS from "./routes/contact-us-page";
import ComingSoonPage from "./routes/coming-soon-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Footer/>}>
            <Route index element = {<Home/>} />
            <Route path="/projects" element = {<Projects/>} />
            <Route path="projects/:projectId" element={<ProjectDetails/>} />
            <Route path="/about-us" element={<AboutUS/>} />
            <Route path="/contact-us" element={<ContactUS/>} />
            <Route path="/coming-soon" element={<ComingSoonPage/>} />

            <Route path="*" element={<div>404 Not Found</div>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <div className="bg-red-200 text-xl text-blue-700 font-bold p-8">
//       Tailwind is finally working ✅
//     </div>
//   );
// }

// export default App;
