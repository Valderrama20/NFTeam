import { ModuleType } from '../../types';
import styles from './Module.module.css';

const Module = ({
  name,
  img
}: ModuleType) => {

  const handleCourse = async () => {
  };

  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt="module img" className={styles.moduleImg} />
      <button className={styles.updateButton} onClick={handleCourse}>Actualizar Metadata</button>
    </div>
  );
};

export default Module;
