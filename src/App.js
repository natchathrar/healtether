// import ChatbotComponent from "./Chatbot";

import Blogs from "./Blogs";
import Home from "./Home";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";


function App() {
  return (
    <div className="App">
      {/* <ChatbotComponent /> */}
      {/* <Home /> */}
      <Router>
        <Navbar />

        <Routes>
          {/* <Route path="/" element={<Navbar />}> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
