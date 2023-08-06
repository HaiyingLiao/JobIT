import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { NotFoundImage } from './style';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '500px',
          margin: '0 auto'
        }}
      >
        <NotFoundImage
          src='/404.svg'
          alt='404 image'
          style={{
            maxHeight: '400px'
          }}
        />
        <Typography paragraph align='center'>
          We can not find a page that you looking for
        </Typography>
        <Button
          sx={{
            backgroundColor: 'primary'
          }}
          onClick={() => navigate(-1)}
          variant='contained'
        >
          Go back
        </Button>
      </Container>
    </Box>
  );
}
