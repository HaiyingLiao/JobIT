import { Button } from '@mui/material';

const commonStyles = {
  textTransform: 'none',
  borderRadius: '10px',
  fontSize: { xs: '13px', sm: '15px' },
  padding: { xs: '8px 14px', sm: '12px 14px' },
};

const variants = {
  primary: {
    color: 'primary',
    variant: 'contained',
  },
  primaryOutlined: {
    color: 'primary',
    variant: 'outlined',
    padding: '7px 10px',
  },
  primaryLighter: {
    color: 'primaryLight',
    variant: 'contained',
    padding: '8px 14px',
  },
  secondary: {
    color: 'secondary',
    variant: 'contained',
  },
  secondaryOutlined: {
    color: 'secondaryoutlined',
    variant: 'outlined',
  },
  small: {
    color: 'small',
    variant: 'contained',
    fontSize: { xs: '13px', sm: '14px' },
    padding: { xs: '3px 8px', sm: '5px 10px' },
    borderRadius: '5px',
  },
};

const CustomButton = ({
  title,
  href,
  variant = 'primary',
  sx = {},
  ...restProps
}) => {
  const variantStyles = variants[variant] || variants.primary;
  const { color, variant: buttonVariant, ...otherStyles } = variantStyles;

  const styles = {
    ...commonStyles,
    ...otherStyles,
  };

  return (
    <Button
      href={href}
      color={color}
      variant={buttonVariant}
      disableElevation
      sx={{ ...styles, ...sx }}
      {...restProps}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
