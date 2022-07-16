import React, { useEffect } from 'react'
import { Wrapper} from './Cart.styles'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { blue, purple } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { Input } from '@mui/material';
import { useDispatch } from 'react-redux';
import { remove, updateProduct } from '../../Redux/slices/myCartSlice';
import { useSelector } from 'react-redux';
import { selectMyProducts } from '../../Redux/slices/myCartSlice';

const ColorButton = styled(Button)(({ theme }) => ({
  textAlign: 'center',
  width:'100%',
  color: theme.palette.getContrastText(purple[400]),
  backgroundColor: '#764AF1',
  '&:hover': {
    backgroundColor: blue[800],
  },
}));

export const Cart = ({items: {data}}) => {
  const products = useSelector(selectMyProducts);
  const [items, setItems] = React.useState(products);
  const totalProducts = items.totalQuantity || 0;
  const formatNumbers = new Intl.NumberFormat('en-US');
  const dispatch = useDispatch();


  const calcTotal = () => {
    let sum = 0;
    for (let item of products) {
      sum += (item.quantity || 1) * item.price;
    }
    return sum;
  }

  const subtotal = formatNumbers.format(calcTotal().toFixed(2));

  const updateQuantityInProduct = (items) => {
    let quantity = 0;
    for (let item of items) {
      quantity += item.quantity
    }
    return quantity;
  }

  const handleChange = (productId, e) => {
    const productQuantity = Number.parseInt(e.target.value)

    if (isNaN(productQuantity) || productQuantity < 1) {
      return;
    }
    dispatch(updateProduct({ productId, quantity: productQuantity }));
  };

  const handleRemoveToMyCart = (productId) => {
    dispatch(remove({ productId }));
  };

  useEffect(() => {
    setItems({ ...items, totalQuantity: updateQuantityInProduct(products) });
  }, [products, setItems])

  return (
    <Wrapper>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '100%',
            padding:'35px'
          },
        }}
      >
        <Paper elevation={3} >
          <div className='titles-container'>
            <h1>Shopping list</h1>
            <p>Price</p>
            <p>Total</p>
          </div>
          <Divider/>
            {products.map(product => (
              <>
                <div className='card-product'key={Math.random()}>
                  <div className='container-image-product'>
                    <img className='principal-image-product' width={100} height={100} src={product.images[0]} alt={product.id}/>
                  </div>
                  <div>
                    <div className='product-name'>
                      <p>{product.name}</p>
                    </div>
                    <div className='product-id'>
                      <p>{`Product Id: ${product.id}`}</p>
                    </div>
                    <div className='container-button-add-to-cart'>
                      <Stack direction="row" alignItems="start" justifyContent="left" spacing={3}>
                    
                        <FormControl sx={{ m: 1 }} variant="standard">
                          <InputLabel htmlFor="demo-customized-textbox">Quantity</InputLabel>
                          <Input className='input' color='primary' defaultValue={product.quantity} onChange={(e) => handleChange(product.id, e)}> </Input>
                        </FormControl>
                    
                        <IconButton onClick={() => handleRemoveToMyCart(product.id)} className='removeBotton' color="error" aria-label="delete" size="small">
                          <DeleteIcon />   
                          <p>Remove Item</p>
                        </IconButton>

                      </Stack>
                    </div>
                  </div>
                  <div>
                    <p className='product-price'>${formatNumbers.format(product.price.toFixed(2))}</p>
                  </div>
                  <div>
                      <p className='product-price'>${product.totalAmount ? product.totalAmount : formatNumbers.format(((product.quantity || 1) * product.price).toFixed(2))}</p>
                    </div>
                </div>
                <Divider className='divider'/>
              </>
            ))}
            <h1 className='subtotal'>{`SUBTOTAL ( ${totalProducts} products ): $${subtotal}`}</h1>
        </Paper>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '100%',
            height: '400px',
            padding:'35px'
          },
        }}
      >
        <Paper elevation={3} >
          <h1>Summary</h1>
          <Divider/>
          <p >{`Subtotal (${totalProducts} 
          products): $${subtotal}`}</p>
        <ColorButton variant="contained">Checkout</ColorButton>
        </Paper>
      </Box>
    </Wrapper>
  )
};


