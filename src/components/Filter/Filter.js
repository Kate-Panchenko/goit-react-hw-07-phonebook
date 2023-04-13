import { FilterForm, Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <FilterForm>
      <Label htmlFor="search">Find contacts by name</Label>
      <Input
        type="text"
        name="search"
        value={filter}
        onChange={handleInputChange}
      />
    </FilterForm>
  );
}

export default Filter;
