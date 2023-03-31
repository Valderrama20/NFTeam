import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';

export default function App() {
  return (
    <div>
      {/* NAVBAR */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
