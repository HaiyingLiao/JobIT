import { demoListType } from '../../constants/index';
import CustomListItem from './CustomListItem';

const FilterSideBar = () => {
  return (
    <>
      {demoListType.map((listData, index) => (
        <CustomListItem listData={listData} key={index} />
      ))}
    </>
  );
};

export default FilterSideBar;
