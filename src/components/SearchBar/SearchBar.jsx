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
  Typography
} from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import icons from '../../assets/icons';
import { CustomButton } from '..';
import { SearchContainer, SearchIconWrapper } from './styles';
import { demoCountries } from '../../constants/index';
import { setSearchBarValue } from '../../slice/searchBar';

const contactTypes = ['Full time', 'Part time', 'Contractor', 'Intern'];

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [contractType, setContractType] = useState('');
  const [location, setLocation] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const { currentPage } = useSelector(state => {
    return state.searchBar;
  });

  const handleSearch = e => {
    e.preventDefault();

    if (contractType === '' || location === '' || jobTitle === '') {
      return toast.error(
        'Please ensure that all areas in the search field are filled out.'
      );
    }

    const formattedContactType = contractType.replace(/\s+/g, '').toUpperCase();

    dispatch(
      setSearchBarValue({
        title: jobTitle,
        jobLocation: location.label,
        jobType: formattedContactType,
        currentPage: currentPage === 'undefined' ? 1 : currentPage
      })
    );

    navigate('/job-search');
  };

  return (
    <FormControl
      sx={{
        borderRadius: '10px',
        backgroundColor: 'customColor.jobCardBg',
        width: '100%',
        boxShadow: '0px 15px 34px 0px rgba(0, 0, 0, 0.02)'
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
            value={jobTitle}
            onInput={e => {
              setJobTitle(e.target.value);
            }}
            placeholder='Job Title, Company, or Keywords'
            sx={{
              width: '100%',
              '& fieldset': { border: 'none' },
              paddingLeft: '2rem'
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
              paddingLeft: '2rem'
            }}
            onChange={(e, value) => {
              setLocation(value);
            }}
            value={location}
            options={demoCountries}
            isOptionEqualToValue={(country, value) => {
              if (value === '' || value === country) return true;
            }}
            getOptionLabel={country => country.label || ''}
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
            renderInput={params => (
              <TextField
                {...params}
                placeholder='Select Location'
                inputProps={{
                  ...params.inputProps
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
              '& fieldset': { border: 'none' }
            }}
            displayEmpty
            value={contractType}
            renderValue={selected => {
              if (!selected) {
                return <Typography color='text.natural6'>Job Type</Typography>;
              }

              return selected;
            }}
            onChange={e => {
              setContractType(e.target.value);
            }}
          >
            {contactTypes.map((item, i) => (
              <MenuItem value={item} key={i}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </SearchContainer>

        <CustomButton
          variant='primary'
          title='Find Jobs'
          onClick={handleSearch}
          sx={{
            minWidth: { xs: '100%', md: '100px' },
            marginTop: { xs: '10px', md: '0px' },
            marginLeft: { xs: '0px', md: '10px' }
          }}
        />
      </Stack>
    </FormControl>
  );
};

export default SearchBar;
