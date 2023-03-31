import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import style from './App.module.css'

export default function App() {
  return (
    <div>
      <nav className={style.nav}>
        <h3>Logo</h3> 
        <button>Wallet</button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
