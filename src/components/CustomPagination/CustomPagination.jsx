import { Pagination } from '@mui/material';
import { useState } from 'react';

const CustomPagination = () => {
  const [page, setPage] = useState(1);
  console.log(page);

  return (
    <Pagination
      count={20}
      color='primary'
      shape='rounded'
      size='large'
      page={page}
      onChange={(e, p) => setPage(p)}
      sx={{ margin: '20px auto 0px' }}
    />
  );
};

export default CustomPagination;
