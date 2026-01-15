import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HookState from "./pages/HookState";
import HookEffect from "./pages/HookEffect";
import HookContext from "./pages/HookContext";
import { ThemeProvider } from "./context/ThemeContext";
import HookRef from "./pages/HookRef";
import Fetch from "./pages/Fetch";
import Axios from "./pages/Axios";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/state" element={<HookState />} />
          <Route path="/effect" element={<HookEffect />} />
          <Route path="/context" element={<HookContext />} />
          <Route path="/ref" element={<HookRef />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/axios" element={<Axios />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
