import React, { useCallback } from 'react';
import Lottie from 'lottie-react';
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
  Chip,
  Alert,
  AlertTitle
} from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addOne,
  I_Storage,
  removeOne,
  removeAll,
  selectCart,
  selectOrder,
  postOrder,
  reset
} from '../redux/slices/Cart';
import { I_Item } from './types/Products';
import { selectUser } from '../redux/slices/User';
import { AppDispatch } from '../redux/store';
import * as animation from './../lotties/order-making.json';

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
  const dispatch = useDispatch<AppDispatch>();

  const items: I_Storage[] | [] = useSelector(selectCart);
  const user = useSelector(selectUser);
  const order = useSelector(selectOrder);
  const history = useHistory();

  const handleAdd = useCallback(
    (item: I_Item) => {
      dispatch(addOne(item));
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    (item: I_Item) => {
      dispatch(removeOne(item));
    },
    [dispatch]
  );

  const handleRemoveAll = useCallback(
    (item: I_Item) => {
      dispatch(removeAll(item));
    },
    [dispatch]
  );

  const handleMakeOrder = useCallback(
    async (items: I_Item[]) => {
      if (!user) return history.push('/login');
      await dispatch(postOrder(items));
    },
    [dispatch]
  );

  const handleNewOrder = useCallback(async () => {
    dispatch(reset());
  }, [dispatch]);

  if (order?.details || order.loading) {
    if (order.loading) {
      return (
        <div role='progressbar'>
          <Lottie animationData={animation} loop={true} />
        </div>
      );
    }
    if (order?.details) {
      return (
        <Alert
          severity='success'
          action={
            <Button
              color='inherit'
              size='small'
              onClick={() => handleNewOrder()}
            >
              START NEW ORDER
            </Button>
          }
        >
          <AlertTitle>{order?.details?.message}</AlertTitle>
          Number: {order?.details?.order}
        </Alert>
      );
    }
  }

  return (
    <>
      <br />
      <br />
      <Grid container>
        {items.length === 0 || !user ? (
          <Grid item xs={12}>
            <Typography align='center' margin='20px'>
              {!user
                ? 'No user is found...'
                : 'There are no products on the cart...'}
              <Link
                component={RouterLink}
                underline='none'
                to={!user ? '/login' : '/products'}
              >
                <Typography component='span' color='yellow'>
                  {!user ? 'please login' : 'check the products'}
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
                          <IconButton
                            color='error'
                            onClick={() => handleRemoveAll(item)}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell align='right'>{item.name}</TableCell>
                        <TableCell align='center' padding='none'>
                          <IconButton
                            color='error'
                            aria-label='remove'
                            onClick={() => {
                              handleRemove(item);
                            }}
                          >
                            <RemoveCircleIcon />
                          </IconButton>

                          <Typography margin={1}>{item.quantity}</Typography>
                          <IconButton
                            color='success'
                            aria-label='add'
                            onClick={() => {
                              handleAdd(item);
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
                <Button
                  fullWidth
                  variant='contained'
                  onClick={() => handleMakeOrder(items)}
                >
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

export default Cart;
