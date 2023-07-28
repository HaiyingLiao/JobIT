import { styled } from '@mui/material/styles';

export const SearchContainer = styled('div')({
  position: 'relative',
  width: '100%',
});

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
