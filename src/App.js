import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationComponent from "./common/NavigationComponent";

function App() {
  return (
    <>
      <NavigationComponent>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </NavigationComponent>
    </>
  );
}

export default App;
