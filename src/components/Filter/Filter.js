import { FilterForm, Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, changeFilter } from 'redux/contactsSlice';

function Filter() {
  const filter = useSelector(getFilter);
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
