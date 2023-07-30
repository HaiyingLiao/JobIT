import {
  Autocomplete,
  TextField,
  Box,
  Select,
  MenuItem,
  FormControl,
  Stack,
  Divider,
  useTheme,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import icons from '../../assets/icons';
import { CustomButton } from '..';
import { SearchContainer, SearchIconWrapper } from './styles';
import { demoCountries } from '../../constants/index';

const SearchBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [contractType, setContractType] = useState('full time');

  return (
    <FormControl
      sx={{
        borderRadius: '10px',
        backgroundColor: 'customColor.jobCardBg',
        width: '100%',
      }}
    >
      <Stack
        direction={isMobile ? 'column' : 'row'}
        justifyContent='center'
        alignItems='center'
        p={2}
        divider={
          <Divider
            orientation={isMobile ? 'horizontal' : 'vertical'}
            flexItem
          />
        }
      >
        <SearchContainer>
          <SearchIconWrapper>
            <img src={icons.search} alt='search' />
          </SearchIconWrapper>
          <TextField
            // onInput={(e) => {
            //   setSearchQuery(e.target.value);
            // }}
            placeholder='Job Title, Company, or Keywords'
            sx={{
              width: '100%',
              '& fieldset': { border: 'none' },
              paddingLeft: '2rem',
            }}
          />
        </SearchContainer>

        <SearchContainer>
          <SearchIconWrapper>
            <img src={icons.pin} alt='pin' />
          </SearchIconWrapper>
          <Autocomplete
            sx={{
              width: '100%',
              '& fieldset': { border: 'none' },
              paddingLeft: '2rem',
            }}
            options={demoCountries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                component='li'
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading='lazy'
                  width='20'
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=''
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder='Select Location'
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
          />
        </SearchContainer>

        <SearchContainer>
          <SearchIconWrapper>
            <img src={icons.briefcase} alt='briefcase' />
          </SearchIconWrapper>

          <Select
            sx={{
              width: '100%',
              paddingLeft: '2rem',
              '& fieldset': { border: 'none' },
            }}
            displayEmpty
            value={contractType}
            renderValue={(selected) => {
              if (!selected) {
                return <Typography color='text.natural6'>Job Type</Typography>;
              }

              return selected;
            }}
            onChange={(e) => {
              setContractType(e.target.value);
            }}
          >
            <MenuItem value='full time'>Full time</MenuItem>
            <MenuItem value='part time'>Part time</MenuItem>
            <MenuItem value='contractor'>Contractor</MenuItem>
            <MenuItem value='intern'>intern</MenuItem>
          </Select>
        </SearchContainer>
        <CustomButton
          variant='primary'
          title='Find Jobs'
          sx={{
            minWidth: { xs: '330px', sm: '330px', md: '100px' },
            marginTop: { xs: '10px', sm: '10px', md: '0px' },
            marginLeft: { xs: '0px', sm: '0px', md: '10px' },
          }}
        />
      </Stack>
    </FormControl>
  );
};

export default SearchBar;
