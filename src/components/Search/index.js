import React from 'react';
import { FilterWrapper, InputSearch } from './styles';

export const Search = ({ onChange, value }) => {
    return (
        <FilterWrapper>
            <InputSearch placeholder='Buscador...' onChange={onChange} value={value}></InputSearch>
        </FilterWrapper>
    )
}