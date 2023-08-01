import { Grid, Typography, TextField } from '@mui/material';

const EstSalariesForm = ({ isMobile }) => {
  const textFieldStyles = {
    borderRadius: '12px',
    mt: '12px',
    bgcolor: 'customColor.toggleBtn',
  };

  const typographyVariant = isMobile ? 'bodyM3_2' : 'bodyM2_2';

  return (
    <Grid
      container
      spacing={2}
      sx={{ pb: isMobile ? '0' : '38px', pt: '38px' }}
    >
      {/* Full-Width Input Box */}
      <Grid item xs={12}>
        <Typography
          variant={typographyVariant}
          color='secondary.contrastText'
          sx={{ lineHeight: '24px' }}
        >
          Job Title
        </Typography>
        <TextField
          variant='outlined'
          fullWidth
          placeholder='Senior User Experience Designer'
          sx={textFieldStyles}
        />
      </Grid>
      {/* Two Column Input Boxes */}
      <Grid item xs={12} sm={6}>
        <Typography
          variant={typographyVariant}
          color='secondary.contrastText'
          sx={{ lineHeight: '24px' }}
        >
          Location
        </Typography>
        <TextField
          variant='outlined'
          fullWidth
          placeholder='New-York, NY, USA'
          sx={textFieldStyles}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography
          variant={typographyVariant}
          color='secondary.contrastText'
          sx={{ lineHeight: '24px' }}
        >
          Radius
        </Typography>
        <TextField
          variant='outlined'
          fullWidth
          placeholder='100'
          sx={textFieldStyles}
        />
      </Grid>
    </Grid>
  );
};

export default EstSalariesForm;
