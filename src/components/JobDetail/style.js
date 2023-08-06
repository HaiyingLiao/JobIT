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
  height: '12rem'
});

export const CompanyLogo = styled('img')({
  position: 'absolute',
  left: '20px',
  bottom: '-30px',
  border: '2px solid #fff',
  borderRadius: '10px'
});

export const CardTitleWrapper = styled('div')({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  width: 'fit-content',
  height: '100%',
  paddingTop: '30px '
});

export const ButtonWrapper = styled('div')(({ theme }) => ({
  gap: '0.5rem',
  width: '100%',
  maxWidth: '300px',
  display: 'flex'
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
  lineHeight: '24px',
  marginTop: '10px'
}));

export const Wrapper = styled('div')(props => ({
  display: 'flex',
  alignItems: 'center',
  width: props.width ? props.width : 'auto',
  gap: props.gap ? props.gap : '0',
  flexWrap: props?.wrap ? 'wrap' : 'inherit',
  justifyContent: props.justifyContent ? props.justifyContent : 'inherit'
}));
