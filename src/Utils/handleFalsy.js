export const handleFalsy = (value, defaultValue) =>
  value !== undefined && value !== null ? value : defaultValue;
