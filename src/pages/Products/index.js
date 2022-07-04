import React, { useCallback, useMemo, useState } from 'react'
import { Filter } from '../../components/Filter'
import { Container, Grid, Body } from './styles'
import { ProductDetails } from '../../components/ProductDetails';
import { Search } from '../../components/Search';
import { data } from '../../utils/data';
import { ProductCard } from '../../components/ProductCard';

export const Products = () => {
  const [productSelected, setProductSelected] = useState({});
  const [categorySelected, setCategorySelected] = useState('');
  const [search, setSearch] = useState('');

  const handleCategoryCheck = (val, name) => {
    setProductSelected({});
    name === categorySelected ? setCategorySelected('') : setCategorySelected(name);
  }

  const filteredData = useMemo(() =>
    data.data.products.items?.filter((item) => {
      const filteredByName = item.name.toLowerCase().includes(search?.toLowerCase());
      if (categorySelected) {
        return item.categories.includes(categorySelected) && filteredByName;
      } else {
        return filteredByName;
      }

    }),
    [data, categorySelected, search]
  )

  const handleSearch = useCallback((value) => {
    setSearch(value.target.value);
  }, [])

  return (
    <Container>
      <Filter
        categories={data.data.categories.items}
        onCheck={handleCategoryCheck}
        categorySelected={categorySelected}
      />
      <Body>
        <Search onChange={handleSearch} value={search} />
        <Grid>
          {
            filteredData?.slice(0, 10).map((product) => {
              const { id, images, name, price } = product;

              return (
                <ProductCard
                  key={id}
                  image={images[0]}
                  name={name}
                  price={price}
                  onClick={() => { setProductSelected(product) }}
                />
              )
            })
          }
        </Grid>
      </Body>
      <ProductDetails product={productSelected} />

    </Container>
  )
}
