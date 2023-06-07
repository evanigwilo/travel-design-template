// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Context
import ThemeContext from "./context/theme";
// Pages
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeContext>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </ThemeContext>
    </BrowserRouter>
  );
};

export default App;
