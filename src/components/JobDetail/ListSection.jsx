import {
  List,
  ListItem,
  Typography,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

import icons from '../../assets/icons';

export default function ListSection({ title, listData }) {
  return (
    <div style={{ marginTop: '30px' }}>
      <Typography
        variant='bodyL'
        color='text.primary'
        sx={{
          typography: {
            xs: 'bodyM',
            sm: 'bodyL',
          },
        }}
      >
        {title}
      </Typography>
      <List>
        {listData?.map((data) => (
          <ListItem key={data} sx={{ paddingLeft: '0px' }}>
            <ListItemIcon sx={{ minWidth: '22px' }}>
              <img src={icons.oval} alt='oval icon' />
            </ListItemIcon>
            <ListItemText
              primary={data}
              sx={{
                typography: 'bodyM_4',
                color: 'text.secondary',
              }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
