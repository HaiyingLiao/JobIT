import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { Box } from '@mui/material';

import icons from '../../assets/icons';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.customColor.toggleBtn,
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
    backgroundColor: '#0BAB7C',
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.customColor.toggleBtn,
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const SwitchButton = ({ checkMode, onChange }) => {
  return (
    <Box display='flex' alignItems='center'>
      <Box component='span' sx={{ marginTop: '5px' }}>
        <img src={icons.sun} alt='moon' />
      </Box>
      <IOSSwitch sx={{ m: 1 }} onChange={onChange} checked={checkMode} />
      <Box component='span' sx={{ marginTop: '5px' }}>
        <img src={icons.moon} alt='sun' />
      </Box>
    </Box>
  );
};

export default SwitchButton;
