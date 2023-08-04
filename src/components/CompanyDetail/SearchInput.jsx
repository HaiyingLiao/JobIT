import { Box, Input, InputAdornment, Typography } from '@mui/material';

import icons from '../../assets/icons';
import CustomButton from '../CustomButton/CustomButton';
import { useForm } from 'react-hook-form';

export default function SearchInput({ isFetching, onSubmit }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: '',
    },
  });

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: '100%',
          height: '100%',
          padding: '8px ',
          backgroundColor: 'customColor.requirementBg',
          borderRadius: '10px !important',
          maxWidth: '465px',
        }}
      >
        <Input
          disabled={isFetching}
          {...register('search', { required: true })}
          disableUnderline
          fullWidth
          placeholder='Search Job title or Keyword'
          sx={{
            display: 'flex',
            height: '44px',
            padding: '10px 0',
            fontSize: {
              xs: '11px',
              sm: '15px',
            },
          }}
          startAdornment={
            <InputAdornment position='start'>
              <img src={icons.search} alt='search icon' />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position='end'>
              <CustomButton title={'Search'} type='submit' />
            </InputAdornment>
          }
        />
        {errors.search?.type === 'required' && (
          <Typography variant='bodyM4_4' sx={{ color: 'red' }}>
            Title or keyword is required!
          </Typography>
        )}
      </form>
    </Box>
  );
}
