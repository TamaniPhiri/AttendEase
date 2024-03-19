import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" Component={Login} />
    </Routes>
  );
}

export default App;
