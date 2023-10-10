import React from 'react';
import { TypeName, InputName, FilterBox } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/contacts/selectors';
import { filterContact } from '../../redux/contacts/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const nameFilter = e => dispatch(filterContact(e.currentTarget.value));

  return (
    <FilterBox>
      <TypeName>Find contacts by name</TypeName>
      <InputName type="text" value={filters} onChange={nameFilter} />
    </FilterBox>
  );
};

export default Filter;
