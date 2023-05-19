// import router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import pages
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
