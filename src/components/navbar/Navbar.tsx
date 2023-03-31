import Login from '../login/Login';
import style from './Navbar.module.css';
import { useState } from 'react';
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <nav className={style.nav}>
        <h3>Logo</h3>
        <button onClick={toggleModal}>Wallet</button>
      </nav>

      {/* MODAL */}
      <Login isOpen={isModalOpen} />
    </>
  );
};

export default Navbar;
