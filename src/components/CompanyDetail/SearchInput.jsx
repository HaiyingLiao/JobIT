import { Box, FormControl, Input, InputAdornment } from '@mui/material';

import icons from '../../assets/icons';
import CustomButton from '../CustomButton/CustomButton';

export default function SearchInput() {
  return (
    <Box
      sx={{
        display: {
          xs: 'block',
          sm: 'flex',
        },
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        gap: '1rem',
        marginTop: '20px',
      }}
    >
      <FormControl
        sx={{
          width: '100%',
          height: '100%',
          padding: '8px ',
          backgroundColor: 'customColor.requirementBg',
          borderRadius: '10px !important',
          maxWidth: {
            xs: '100%',
            sm: '465px',
          },
        }}
      >
        <Input
          disableUnderline
          fullWidth
          placeholder='Search Job title or Keyword'
          required
          sx={{
            display: 'flex',
            height: '44px',
            padding: '10px 0',
          }}
          startAdornment={
            <InputAdornment position='start'>
              <img src={icons.search} />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position='end'>
              <CustomButton title={'Search'} />
            </InputAdornment>
          }
        />
      </FormControl>

      <section></section>
    </Box>
  );
}
