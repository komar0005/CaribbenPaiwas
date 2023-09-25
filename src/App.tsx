import Joined from "./pages/Joined";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/joined" element={<Joined />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
