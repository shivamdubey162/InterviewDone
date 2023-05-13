import "./App.css";
import HeaderPage from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/homePage/home'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderPage />} />
          <Route path="/home" element={<HomePage/>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
