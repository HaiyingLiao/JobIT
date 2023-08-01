import { Typography, Box, ListItem, List } from '@mui/material';

const ChartLegend = ({ isMobile }) => {
  const legend = ['Minimum salary', 'Maximum salary', 'Median salary'];
  const bgColors = ['#FDDD8C', 'primary.main', '#FFBBD7'];
  const listItemStyle = { paddingRight: isMobile ? '6px' : '0' };
  const typographyStyle = { fontSize: isMobile ? '10px' : 'bodyM4_3' };

  return (
    <List
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        width: isMobile ? '100%' : '78%',
        paddingLeft: isMobile ? '0' : '26px',
      }}
    >
      {legend.map((item, i) => (
        <ListItem key={item} disablePadding sx={listItemStyle}>
          <Box
            sx={{
              borderRadius: '60px',
              bgcolor: `${bgColors[i]}`,
              height: '10px',
              width: '10px',
              marginRight: isMobile ? '4px' : '8px',
            }}
          ></Box>
          <Typography sx={typographyStyle}>{item}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default ChartLegend;
