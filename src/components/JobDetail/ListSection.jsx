import {
  List,
  ListItem,
  Typography,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

import icons from '../../assets/icons';
import Title from './Title';

export default function ListSection({ title, listData }) {
  return (
    <div>
      <Title title={title} />
      <List>
        {listData?.map((data) => (
          <ListItem key={data} sx={{ paddingLeft: '0px' }}>
            <ListItemIcon sx={{ minWidth: '22px' }}>
              <img src={icons.oval} alt='oval icon' />
            </ListItemIcon>
            <ListItemText
              primary={data}
              sx={({ breakpoints }) => ({
                fontWeight: '400',
                fontSize: '1rem',
                color: 'text.secondary',
                [breakpoints.down('sm')]: {
                  fontWeight: '500',
                },
              })}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
