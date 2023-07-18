import TextField from '@mui/material/TextField';

const CssTextField = ({ defaultValue }) => {
  return (
    <TextField
      hiddenLabel
      defaultValue={defaultValue}
      variant='outlined'
      size='small'
      sx={{
        '& fieldset': { border: 'none' },
      }}
      InputProps={{
        style: {
          borderRadius: '10px',
          backgroundColor: '#F5F5F8',
          fontSize: '13px',
        },
      }}
    />
  );
};

export default CssTextField;
