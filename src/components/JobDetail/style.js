import { styled } from '@mui/system';

export const CardHeaderContainer = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%'
});

export const CardHeaderImage = styled('img')({
  width: '100%',
  objectFit: 'cover',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
<<<<<<< HEAD
  height: '12rem',
  backgroundColor: '#fff'
})
=======
  height: '12rem'
});
>>>>>>> main

export const CompanyLogo = styled('img')({
  position: 'absolute',
  left: '20px',
  bottom: '-30px',
  border: '2px solid #fff',
<<<<<<< HEAD
  borderRadius: '10px',
  objectFit: 'contain',
  width: '64px',
  height: '64px',
  backgroundColor: '#fff',
})
=======
  borderRadius: '10px'
});
>>>>>>> main

export const CardTitleWrapper = styled('div')({
  display: 'flex',
  gap: '6px',
  alignItems: 'start',
  width: 'fit-content',
  height: '100%',
  paddingTop: '30px '
});

export const ButtonWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  width: '100%',
  maxWidth: '300px',
  justifyContent: 'end',
  [theme.breakpoints.down(707)]: {
    order: '1',
    marginTop: '15px',
    justifyContent: 'start'
  },
  [theme.breakpoints.up(707)]: {
    order: '0',
    marginTop: '0'
  }
}));

export const MoreButton = styled('button')({
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer'
});
export const RequirementWrapper = styled('div')(props => ({
  display: 'grid',
  backgroundColor: props.backgroundColor,
  borderRadius: '10px',
  padding: '16px 0 0 16px',
  backgroundImage: 'none',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  width: '100%',
  gap: '16px',
  lineHeight: '24px'
}));

export const Wrapper = styled('div')(props => ({
  display: 'flex',
  alignItems: 'center',
  width: props.width ? props.width : 'auto',
  gap: props.gap ? props.gap : '0',
  flexWrap: props?.wrap ? 'wrap' : 'inherit',
  justifyContent: props.justifyContent ? props.justifyContent : 'inherit'
}));
