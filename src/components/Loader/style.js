import { styled, keyframes } from '@mui/system';

export const AnimationContainer = styled('div')({
  maxWidth: '1600px',
  marginInline: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%',
});
export const AnimationBox = styled('div')({
  position: 'relative',
  width: '96px',
  height: '96px',
  transform: 'rotate(45deg)',
});
const animation = keyframes`
  0%{  left: 0;top: 0;}
  12.5%, 23% { left: 32px;top: 0;}
  25%, 35.5% { left: 64px; top: 0%; }
  37.5% { left: 64px; top: 32px; }
  48% { left: 64px; top: 32px; }
  50%, 60% { left: 32px; top: 32px; }
  62.5%, 73.5% { left: 32px; top: 64px; }
  75%, 85%, 98% { left: 0; top: 32px; }
  0%, 10% { left:0; top: 0; }
`;
export const Square = styled('div')({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '28px',
  height: '28px',
  backgroundColor: '#0BAB7C',
  margin: '2px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  animation: `${animation} 10s ease-in-out infinite both`,
  ':nth-of-type(0)': {
    animationDelay: '0',
  },
  ':nth-of-type(1)': {
    animationDelay: '-1.4285714286s',
  },
  ':nth-of-type(2)': {
    animationDelay: '-2.8571428571s',
  },
  ':nth-of-type(3)': {
    animationDelay: '-4.2857142857s',
  },
  ':nth-of-type(4)': {
    animationDelay: '-5.7142857143s',
  },
  ':nth-of-type(5)': {
    animationDelay: '-7.1428571429s',
  },
  ':nth-of-type(6)': {
    animationDelay: '-8.5714285714s',
  },
  ':nth-of-type(7)': {
    animationDelay: '-10s',
  },
});
