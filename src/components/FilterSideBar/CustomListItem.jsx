import { useState } from 'react';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Checkbox,
  Typography
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import icons from '../../assets/icons';
import { setSearchBarValue } from '../../slice/searchBar';

const ListItem = ({ listData }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const { title, jobLocation, jobType } = useSelector(state => {
    return state.searchBar;
  });

  let debounceTimeout;
  const handleCheckboxChange = item => {
    clearTimeout(debounceTimeout);
    const selectedexperience = item.split(' ').join('_');
    const formattedContactType = item.replace(/\s+/g, '').toUpperCase();
    const selectedJobType =
      item === 'Full Time' ||
      item === 'Part time' ||
      item === 'Intern' ||
      item === 'Contractor'
        ? formattedContactType
        : jobType;
    const isRemoteType = item === 'true' ? item : 'false';
    const experienceType =
      item === 'more than 3 years experience' ||
      item === 'Under 3 years of experience' ||
      item === 'No experience' ||
      item === 'No degree'
        ? selectedexperience
        : '';

    debounceTimeout = setTimeout(() => {
      dispatch(
        setSearchBarValue({
          currentPage: 1,
          title,
          jobLocation,
          jobType: selectedJobType,
          experience: experienceType,
          isRemote: isRemoteType
        })
      );
    }, 500);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360 }} component='nav'>
      <ListItemButton onClick={handleClick}>
        <ListItemText
          primary={<Typography variant='bodyL_2'>{listData.title}</Typography>}
        />
        <img src={open ? icons.cheveronUp : icons.cheveron} alt='cheveron' />
      </ListItemButton>

      <Collapse in={open} timeout='auto' unmountOnExit>
        <List
          component='div'
          disablePadding
          sx={{
            width: '100%',
            maxWidth: 380,
            position: 'relative'
          }}
        >
          {listData.data.map((item, i) => (
            <ListItemButton key={i}>
              <ListItemIcon>
                <Checkbox
                  edge='start'
                  disableRipple
                  onChange={e => {
                    if (e.target.checked) {
                      handleCheckboxChange(item);
                    }
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant='bodyM3_3' color='text.natural8'>
                    {item}
                  </Typography>
                }
                sx={{
                  width: '200px',
                  marginRight: '30px'
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export default ListItem;
