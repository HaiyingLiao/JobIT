import { useDispatch, useSelector } from 'react-redux';

import { useGetSearchQuery } from '../services/JSearch';

export default function useSearch(location, employmentType, page, companyName) {
  const dispatch = useDispatch();
  const value = useSelector(({ searchSlice }) => searchSlice.value);
  const query =
    !location || employmentType || !page
      ? `${value.search} in ${companyName}`
      : `${value.search} in ${location}`;

  const { data, isError, isFetching } = useGetSearchQuery(
    {
      name: query,
      num_pages: '1',
      page: page ? page : '1',
      employmentTypes: employmentType ? employmentType : 'FULLTIME  ',
    },
    {
      skip: value === '',
      refetchOnMountOrArgChange: value !== '',
    }
  );

  return { data, isError, isFetching, dispatch };
}
