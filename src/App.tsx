import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import Navbar from './components/navbar/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
