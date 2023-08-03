import { useDispatch, useSelector } from 'react-redux';

import { useGetSearchQuery } from '../services/JSearch';

export default function useSearch(
  location = 'US',
  employmentType = 'FULLTIME'
) {
  const dispatch = useDispatch();
  const value = useSelector(({ searchSlice }) => searchSlice.value);

  const { data, isError, isFetching } = useGetSearchQuery(
    {
      name: `${value.search} in ${location}`,
      page: '10',
      num_pages: '1',
      date_posted: 'all',
      employmentTypes: employmentType,
    },
    {
      skip: value === '',
      refetchOnMountOrArgChange: value !== '',
    }
  );

  return { data, isError, isFetching, dispatch };
}
