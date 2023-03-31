<<<<<<< HEAD
import style from "./App.module.css"


export default function Home() {
 
  return (<div>
      <nav className={style.nav}>
       jose
     </nav>
  </div>)
=======
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
>>>>>>> 24ac45331bcc636e30722c19a60ccf7206c3181e
}
