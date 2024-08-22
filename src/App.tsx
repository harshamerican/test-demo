import { Route, Routes } from "react-router-dom";
import Register from "./containers/Pages/Register";
import Login from "./containers/Pages/Login";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
