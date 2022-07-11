import React from 'react'
import { Wrapper} from './Cart.styles'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';



const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export const Cart = ({items: {data}}) => {
  const {products} = data;
  const [quantity, setAge] = React.useState("");

  console.log(quantity);

  let showManualInput = quantity > 9;

  const handleChange = (event) => {
    setAge(event.target.value);
  };


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
          </div>
          <Divider/>
            {products.items.map(product => (
              <>
              
              <div className='card-product'key={product.id}>
                <div className='container-image-product'>
                  <img className='principal-image-product' width={100} height={150}src={product.images[0]} alt={product.id}/>
                </div>

                <div>
                  <div className='product-name'>
                    <p>{product.name}</p>
                  </div>
                  <div className='product-category'>
                    <p>{product.id}</p>
                  </div>
                  <div className='container-button-add-to-cart'>
                    <div>

                       { showManualInput && (
                        <FormControl sx={{ m: 1 }} variant="standard">
                          <InputLabel htmlFor="demo-customized-textbox">Quantity</InputLabel>
                          <BootstrapInput id="demo-customized-textbox" />
                        </FormControl>
                      )} 

                        <FormControl sx={{ m: 1 }} variant="standard" disabled={showManualInput}>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">Quantity</InputLabel>
                          <Select
                            labelId="1"
                            id="1"
                            value={quantity}
                            defaultValue={1}
                            onChange={handleChange}
                            input={<BootstrapInput />}
                          >
                            <MenuItem key ={1} value={"1"}>1</MenuItem>
                            <MenuItem key ={2} value={"2"}>2</MenuItem>
                            <MenuItem key ={3} value={"3"}>3</MenuItem>
                            <MenuItem key ={4} value={"4"}>4</MenuItem>
                            <MenuItem key ={5} value={"5"}>5</MenuItem>
                            <MenuItem key ={6} value={"6"}>6</MenuItem>
                            <MenuItem key ={7} value={"7"}>7</MenuItem>
                            <MenuItem key ={8} value={"8"}>8</MenuItem>
                            <MenuItem key ={9} value={"9"}>9</MenuItem>
                            <MenuItem key ={10} value={"10"}>+10</MenuItem>
                          </Select>
                        </FormControl>
                    </div>
                  </div>
                </div>
                <div >
                    <p className='product-price'>${product.price}</p>
                  </div>
                <div >

                </div>
               
              </div>
              <Divider/>
              </>
            ))}
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
        </Paper>
      </Box>
    </Wrapper>
  )
};


