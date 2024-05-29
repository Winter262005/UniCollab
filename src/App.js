import "./App.css";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./Components/Settings/SettingsPage";
import About_us from "./Components/footer_section/about_us/About_us";
import BlogPage from "./Components/footer_section/BlogPage/BlogPage"
import ContactUs from "./Components/footer_section/ContactUs/contact_us";
import MyProjects from "./Components/menu_section/my_projects/MyProjects";
import NewProject from "./Components/menu_section/new_project/NewProject";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-content"></div>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About_us />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/contacts" element={<ContactUs />} />
          <Route path="/projects" element={<MyProjects />} />
          <Route path="/new/project" element={<NewProject />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
