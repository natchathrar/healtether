// import ChatbotComponent from "./Chatbot";

import Blogs from "./Blogs";
import Home from "./Home";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import ABHA from "./ABHA";
import BuyNow from "./BuyNow";
import Login from "./Login";
import Main from "./Main";


function App() {
  return (
    <div className="App">
      {/* <ChatbotComponent /> */}
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

        </Routes>
        <Routes>
          <Route path="" element={<Main />} >
            <Route exact path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/abha" element={<ABHA />} />
            <Route path='/bnpl' element={<BuyNow />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
