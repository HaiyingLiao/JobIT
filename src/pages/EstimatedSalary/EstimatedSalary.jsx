import { useContext } from 'react';
import { ColorModeContext } from '../../Utils/ColorMode';

const EstimatedSalary = () => {
  const { name, setName } = useContext(ColorModeContext);

  return (
    <div>
      EstimatedSalary
      <h1>{name}</h1>
      <button onClick={() => setName('Himanshi')}>Click Me</button>
    </div>
  );
};

export default EstimatedSalary;
