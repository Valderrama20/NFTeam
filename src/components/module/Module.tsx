import { ModuleType } from '../../types';

const Module = ({ name, img }: ModuleType) => {
  const handleCourse = async () => {};

  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt="module img" />
      <button onClick={handleCourse}>Actualizar Metadata</button>
    </div>
  );
};

export default Module;
