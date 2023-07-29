import { demoListType } from '../../constants/index';
import ListItem from './ListItem';

const FilterSideBar = () => {
  return (
    <>
      {demoListType.map((listData, index) => (
        <ListItem listData={listData} key={index} />
      ))}
    </>
  );
};

export default FilterSideBar;
