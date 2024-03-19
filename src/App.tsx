import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/login" Component={Login} />
      <Route path="/" Component={Home} />
    </Routes>
  );
}

export default App;
