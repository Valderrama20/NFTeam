import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}
