export default function getDate() {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return new Date().toLocaleDateString('en-US', options);
}
