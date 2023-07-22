import { Box } from '@mui/material';
import { AnimationContainer, AnimationBox, Square } from './style';
export default function Loader() {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: theme.palette.mode === 'light' ? '#FAFAFB' : '#13131A',
        position: 'fixed',
        top: '0',
        zIndex: '10',
      })}
    >
      <AnimationContainer>
        <AnimationBox>
          {[1, 2, 3, 4, 5, 6, 7].map((square) => (
            <Square key={square} />
          ))}
        </AnimationBox>
      </AnimationContainer>
    </Box>
  );
}
