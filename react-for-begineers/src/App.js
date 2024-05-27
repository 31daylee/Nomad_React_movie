import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie" element={<Detail></Detail>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
