import { Routes, Route } from 'react-router-dom';
import Login from "./Login";
import Sign from "./Sign";
import Welcome from './welcome';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Sign />} />
       <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
