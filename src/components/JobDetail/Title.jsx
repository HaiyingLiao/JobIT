import { Typography } from '@mui/material';

export default function Title({ title }) {
  return (
    <Typography
      variant='bodyL'
      color='text.primary'
      pt={5}
      sx={({ breakpoints }) => ({
        [breakpoints.down('sm')]: {
          fontSize: '1rem',
          fontWeight: '400',
        },
      })}
    >
      {title}
    </Typography>
  );
}
