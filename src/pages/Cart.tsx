import React, { useEffect, useState } from 'react';
import {
  Grid,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Divider,
  Box,
  Button,
  Chip
} from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  getStorage,
  I_Storage,
  addItemOnStorage,
  removeItemOnStorage
} from '../utils/sessionStorage';
import { Link as RouterLink } from 'react-router-dom';

export const totalPriceByProduct: (
  price: number,
  quantity: number
) => string = (price, quantity) =>
  Math.round((price * quantity * 100) / 100).toFixed(2);

export const totalProducts: (items: I_Storage[]) => number = items =>
  items.reduce((acc, item) => acc + item.quantity, 0);

export const totalPrice: (items: I_Storage[]) => string = items =>
  Math.round(
    (items.reduce((acc, item) => acc + item.quantity * item.price, 0) * 100) /
      100
  ).toFixed(2);

export const Cart = () => {
  const [items, setItems] = useState<I_Storage[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    setItems(getStorage());
  }, [refresh]);

  return (
    <>
      <br />
      <br />

      <Grid container>
        {items.length === 0 ? (
          <Grid item xs={12}>
            <Typography align='center' margin='20px'>
              There are no products on the cart...
              <Link component={RouterLink} underline='none' to='/products'>
                <Typography component='span' color='yellow'>
                  check the products
                </Typography>
              </Link>
            </Typography>
          </Grid>
        ) : (
          <>
            <Grid item xs={12} sm={10} md={8}>
              <TableContainer component={Paper}>
                <Table aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell align='right'>Product details</TableCell>
                      <TableCell align='right'>Quantity</TableCell>
                      <TableCell align='right'>Price</TableCell>
                      <TableCell align='right'>Total</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.map(item => (
                      <TableRow key={item.id}>
                        <TableCell component='th' scope='row' padding='none'>
                          <img
                            src={item.images[0]}
                            alt={item.name}
                            style={{ maxWidth: '100px' }}
                          />
                        </TableCell>
                        <TableCell align='right'>{item.name}</TableCell>
                        <TableCell align='center' padding='none'>
                          <IconButton
                            color='error'
                            aria-label='remove'
                            onClick={() => {
                              removeItemOnStorage(item);
                              setRefresh(!refresh);
                            }}
                          >
                            <RemoveCircleIcon />
                          </IconButton>

                          <Typography margin={1}>{item.quantity}</Typography>
                          <IconButton
                            color='success'
                            aria-label='add'
                            onClick={() => {
                              addItemOnStorage(item);
                              setRefresh(!refresh);
                            }}
                          >
                            <AddCircleIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell align='right'>${item.price}</TableCell>
                        <TableCell align='right' padding='none'>
                          ${totalPriceByProduct(item.price, item.quantity)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={0} md={1}></Grid>
            <Grid item xs={12} sm={2} alignSelf='center'>
              <Box
                component='div'
                sx={{
                  border: '5px dashed grey',
                  borderRadius: '20px',
                  backgroundColor: '#9daaca'
                }}
                role='status'
              >
                <Typography align='center' padding={2}>
                  Items:
                </Typography>
                <Divider>
                  <Chip label={`${totalProducts(items)}`} color='warning' />
                </Divider>
                <Typography align='center' padding={2}>
                  Total Cost:
                </Typography>
                <Divider>
                  <div data-testid='totalPrice'>
                    <Chip
                      key='yeooo'
                      label={`$${totalPrice(items)}`}
                      color='warning'
                    />
                  </div>
                </Divider>
                <br />
                <Button fullWidth variant='contained'>
                  CHECKOUT
                </Button>
              </Box>
              <Divider />
            </Grid>
            <Grid item xs={0} md={1}></Grid>
          </>
        )}
      </Grid>
    </>
  );
};
