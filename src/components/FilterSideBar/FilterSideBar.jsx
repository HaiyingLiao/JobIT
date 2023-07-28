import { useState } from 'react';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Checkbox,
  Typography,
} from '@mui/material';

import icons from '../../assets/icons';

// temporary data, later fetch from API
const demoListType = [
  {
    title: 'Type Of Employment',
    data: [
      { type: 'Full Time', num: 103 },
      { type: 'Part Time', num: 142 },
      { type: 'Internship', num: 142 },
      { type: 'Freelance', num: 103 },
      { type: 'Remote', num: 142 },
      { type: 'Co-founder', num: 142 },
      { type: 'Contract', num: 142 },
    ],
  },
  {
    title: 'Experience Level',
    data: [
      { type: 'Senior Level', num: 103 },
      { type: 'Entry Level', num: 142 },
      { type: 'Mid Level', num: 142 },
      { type: 'Student Level', num: 103 },
      { type: 'Directors', num: 142 },
      { type: 'VP or Above', num: 142 },
      { type: 'Contract', num: 142 },
    ],
  },
  {
    title: 'Salary Range',
    data: [
      { type: '$0 - $100', num: 103 },
      { type: '$101 - $200', num: 142 },
      { type: '$201 - $500', num: 142 },
      { type: '$501 - $750', num: 103 },
      { type: '$751 - $1000', num: 142 },
      { type: '$1000 Above', num: 142 },
    ],
  },
  {
    title: 'Location',
    data: [{ type: 'demo', num: 103 }],
  },
  {
    title: 'Language',
    data: [{ type: 'demo', num: 103 }],
  },
  {
    title: 'Facility',
    data: [{ type: 'demo', num: 103 }],
  },
];

const FilterSideBar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {demoListType.map((listData, index) => (
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: '', marginTop: '30px' }}
          component='nav'
          key={index}
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText
              primary={
                <Typography variant='bodyL_2'>{listData.title}</Typography>
              }
            />
            {open ? (
              <img src={icons.cheveronUp} alt='cheveron' />
            ) : (
              <img src={icons.cheveron} alt='cheveron' />
            )}
          </ListItemButton>

          <Collapse in={open} timeout='auto' unmountOnExit>
            <List
              component='div'
              disablePadding
              sx={{
                width: '100%',
                maxWidth: 380,
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
              }}
            >
              {listData.data.map((item, i) => (
                <ListItemButton key={i}>
                  <ListItemIcon>
                    <Checkbox edge='start' disableRipple />
                  </ListItemIcon>

                  <ListItemText
                    primary={
                      <Typography variant='bodyM3_3' color='text.natural8'>
                        {item.type}
                      </Typography>
                    }
                    sx={{
                      width: '200px',
                      marginRight: '30px',
                    }}
                  />
                  <ListItemText
                    primary={item.num}
                    sx={{
                      bgcolor: 'customColor.toggleBtn',
                      borderRadius: '5px',
                      textAlign: 'center',
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
      ))}
    </>
  );
};

export default FilterSideBar;
