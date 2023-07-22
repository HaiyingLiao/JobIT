import { PrimaryButton } from '../../components/Button/Button';
import CustomButton from '../../components/CustomButton/CustomButton';

const EstimatedSalary = () => {
  return (
    <div>
      <p> EstimatedSalary</p>
      <CustomButton title='Test' variant='primary' />
      <PrimaryButton href='https://youtube.com' title='YouTube' width='200px' />
    </div>
  );
};
export default EstimatedSalary;
