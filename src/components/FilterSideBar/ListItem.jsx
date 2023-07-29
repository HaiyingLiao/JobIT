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

const ListItem = ({ listData }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: '', marginTop: '30px' }}
      component='nav'
    >
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
  );
};

export default ListItem;
