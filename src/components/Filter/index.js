import React from 'react';
import { Container, FilterText, CategoriesContainer, CheckContainer } from './styles';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const CheckCategory = ({ id, name, checked = false, onChange }) => {
    return (
        <CheckContainer key={id}>
            <Checkbox
                name={name}
                checked={checked}
                onChange={onChange}
                {...label}
                sx={{
                    color: 'lightgray',
                    '&.Mui-checked': {
                        color: pink[600],
                    },
                }}
            />
            <p>{name}</p>
        </CheckContainer>
    )
}

export const Filter = ({ categories, onCheck, categorySelected }) => {

    return (
        <Container>
            <FilterText>Filter</FilterText>
            <br />
            <FilterText>Categories</FilterText>
            <br />
            <CategoriesContainer>
                {
                    categories?.map((category) => {
                        return (
                            <CheckCategory
                                key={category.id}
                                id={category.id}
                                name={category.name}
                                onChange={(val) => { onCheck(val, category.name) }}
                                checked={categorySelected === category.name}
                            />
                        )
                    })
                }
            </CategoriesContainer>
        </Container>
    )
}