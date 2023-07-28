import {
  Grid,
  Typography,
  TextField,
  Box,
  ListItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Chart from './Chart';

const EstimatedSalary = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box
      sx={{
        backgroundColor: 'customColor.pageBG',
        minHeight: '100vh',
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          padding: { xs: '120px 24px 0 24px', md: '120px 80px 0 80px' },
        }}
      >
        <Grid item sm={6} xs={12}>
          <Typography variant={isMobile ? 'h4' : 'h1'} mb='12px'>
            Estimated Salaries
          </Typography>
          <Typography
            variant={isMobile ? 'bodyM_3' : 'h6'}
            color='text.secondary'
          >
            Monday, 13 Jan 2023
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ py: '38px', pr: { sm: '20px', lg: '85px' } }}
          >
            <Grid item xs={12}>
              <Typography
                variant={isMobile ? 'bodyM3_2' : 'bodyM2_2'}
                color='secondary.contrastText'
                sx={{ lineHeight: '24px' }}
              >
                Job Title
              </Typography>
              <TextField
                fullWidth
                placeholder='Senior User Experience Designer'
                sx={{
                  borderRadius: '12px',
                  mt: '12px',
                  bgcolor: 'customColor.toggleBtn',
                  border: '1px solid rgba(226, 226, 234, 0.60)',
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant={isMobile ? 'bodyM3_2' : 'bodyM2_2'}
                color='secondary.contrastText'
                sx={{ lineHeight: '24px' }}
              >
                Location
              </Typography>
              <TextField
                fullWidth
                placeholder='New-York, NY, USA'
                sx={{
                  borderRadius: '12px',
                  bgcolor: 'customColor.toggleBtn',
                  mt: '12px',
                  border: '1px solid rgba(226, 226, 234, 0.60)',
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant={isMobile ? 'bodyM3_2' : 'bodyM2_2'}
                color='secondary.contrastText'
                sx={{ lineHeight: '24px' }}
              >
                Radius
              </Typography>
              <TextField
                fullWidth
                placeholder='100'
                sx={{
                  borderRadius: '12px',
                  mt: '12px',
                  bgcolor: 'customColor.toggleBtn',
                  border: '1px solid rgba(226, 226, 234, 0.60)',
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItemst: 'flex-start',
            bgcolor: 'customColor.jobCardBg',
            borderRadius: '10px',
            padding: '26px',
            marginTop: isMobile ? '0' : '45px',
          }}
        >
          <Typography
            sx={{
              fontSize: { sm: '1rem', md: '1.5rem' },
              fontWeight: '400',
              paddingLeft: isMobile ? '0' : '26px',
            }}
            mb='8px'
          >
            <Typography component='span' variant={isMobile ? 'bodyM' : 'h2'}>
              Estimated Salary
            </Typography>
            &nbsp;for&nbsp;
            <Typography component='span' variant={isMobile ? 'bodyM' : 'h2'}>
              NodeJS Developer
            </Typography>
            &nbsp;in&nbsp;
            <Typography component='span' variant={isMobile ? 'bodyM' : 'h2'}>
              New York
            </Typography>
          </Typography>
          <Box display='flex' paddingLeft={isMobile ? '0' : '26px'}>
            <ListItem
              disablePadding
              sx={{ paddingRight: isMobile ? '6px' : '0' }}
            >
              <Box
                sx={{
                  borderRadius: '60px',
                  bgcolor: '#FDDD8C',
                  height: '10px',
                  width: '10px',
                  marginRight: isMobile ? '4px' : '8px',
                }}
              ></Box>
              <Typography
                variant={!isMobile && 'bodyM4_3'}
                sx={{ fontSize: isMobile ? '10px' : '13px' }}
              >
                Minimum Salary
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ paddingRight: isMobile ? '6px' : '0' }}
            >
              <Box
                sx={{
                  borderRadius: '60px',
                  bgcolor: '#0BAB7C',
                  height: '10px',
                  width: '10px',
                  marginRight: isMobile ? '4px' : '8px',
                }}
              ></Box>
              <Typography
                variant={!isMobile && 'bodyM4_3'}
                sx={{ fontSize: isMobile ? '10px' : '13px' }}
              >
                Maximum Salary
              </Typography>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ paddingRight: isMobile ? '6px' : '0' }}
            >
              <Box
                sx={{
                  borderRadius: '60px',
                  bgcolor: '#FFBBD7',
                  height: '10px',
                  width: '10px',
                  marginRight: isMobile ? '4px' : '8px',
                }}
              ></Box>
              <Typography
                variant={!isMobile && 'bodyM4_3'}
                sx={{ fontSize: isMobile ? '10px' : '13px' }}
              >
                Median Salary
              </Typography>
            </ListItem>
          </Box>
          <Chart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EstimatedSalary;
