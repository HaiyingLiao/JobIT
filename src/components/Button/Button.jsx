import Button from '@mui/material/Button';

const commomStyles = {
  textTransform: 'none',
  borderRadius: '10px',
  fontSize: { xs: '13px', sm: '15px' },
  padding: { xs: '8px 14px', sm: '12px 14px' },
};

export const PrimaryButton = ({ title, href, width }) => {
  return (
    <Button
      color='primary'
      variant='contained'
      href={href}
      disableElevation
      sx={[{ ...commomStyles }, { width }]}
    >
      {title}
    </Button>
  );
};

export const PrimaryOutlineButton = ({ title, href, startIcon, width }) => {
  return (
    <Button
      color='primary'
      variant='outlined'
      href={href}
      startIcon={startIcon}
      disableElevation
      sx={[{ ...commomStyles }, { width }]}
    >
      {title}
    </Button>
  );
};

export const PrimaryLighterButton = ({ title, href, width }) => {
  return (
    <Button
      color='primaryLight'
      variant='contained'
      href={href}
      disableElevation
      sx={[{ ...commomStyles }, { width }]}
    >
      {title}
    </Button>
  );
};

export const SecondaryButton = ({ title, href, width }) => {
  return (
    <Button
      color='secondary'
      variant='contained'
      href={href}
      disableElevation
      sx={[{ ...commomStyles }, { width }]}
    >
      {title}
    </Button>
  );
};

export const SecondaryOutlineButton = ({ title, href, startIcon, endIcon, width }) => {
  return (
    <Button
      color='secondaryoutlined'
      variant='outlined'
      href={href}
      startIcon={startIcon}
      endIcon={endIcon}
      disableElevation
      sx={[{ ...commomStyles }, { width }]}
    >
      {title}
    </Button>
  );
};

export const SmallButton = ({ title, href, width, startIcon, endIcon, margin }) => {
  return (
    <Button
      color='secondary'
      variant='contained'
      href={href}
      startIcon={startIcon}
      endIcon={endIcon}
      disableElevation
      sx={{
        width,
        margin,
        textTransform: 'none',
        borderRadius: '5px',
        fontSize: { xs: '13px', sm: '14px' },
        padding: { xs: '3px 8px', sm: '5px 10px' },
      }}
    >
      {title}
    </Button>
  );
};
