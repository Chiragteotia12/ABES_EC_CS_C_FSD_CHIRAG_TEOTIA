import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Home from "./component/Home";
import About from "./component/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Body />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
