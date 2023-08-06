import { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

const ChartLocationAutocomplete = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async event => {
    const { value } = event.target;
    setValue(value);

    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/US/regions/CA/cities?q=${value}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      const suggestions = result.data.map(location => ({
        city: location.name,
        region: location.region,
        country: location.country
      }));
      console.log({ suggestions });

      setSuggestions(suggestions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Autocomplete
        value={value}
        options={suggestions}
        getOptionLabel={option =>
          `${option.city}, ${option.region}, ${option.country}`
        }
        onChange={(_, newValue) => {
          setValue(newValue?.city || '');
        }}
        renderInput={params => (
          <TextField {...params} label='City' onChange={handleInputChange} />
        )}
      />
    </div>
  );
};

export default ChartLocationAutocomplete;
