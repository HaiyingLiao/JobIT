import { CardHeaderImage, CompanyLogo, CardHeaderContainer } from './style';
import { banner } from '../../assets/images';

export default function CardHeader({ logo }) {
  return (
    <CardHeaderContainer>
      <CardHeaderImage src={banner} alt='banner image' />
      <CompanyLogo src={logo} width={64} height={64} />
    </CardHeaderContainer>
  );
}
