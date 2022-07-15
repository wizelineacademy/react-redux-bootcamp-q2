import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import {
  selectCartProducts,
  selectMessage,
  selectOrder,
} from '../selectors/cart';
import {
  ColumnHeader,
  Row,
  Table,
  TableContainer,
  Title,
} from '../styles/components/CartTable.styles';
import { Main } from '../styles/pages/Home.styles';
import CartRow from './CartRow';
import Summary from './Summary';
import 'react-toastify/dist/ReactToastify.css';

const CartTable = () => {
  const productos = useSelector(selectCartProducts);
  const order = useSelector(selectOrder);
  const message = useSelector(selectMessage);

  useEffect(() => {
    if (!order && message) {
      toast.info(message, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    if (order && message) {
      toast.info(`${message} \n Number: ${order}`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  }, [order, message]);

  return (
    <>
      <Title>Shopping Cart</Title>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      {Object.keys(productos).length > 0 ? (
        <>
          <TableContainer>
            <Table>
              <thead>
                <Row>
                  <ColumnHeader>Product details</ColumnHeader>
                  <ColumnHeader>Quantity</ColumnHeader>
                  <ColumnHeader>Price</ColumnHeader>
                  <ColumnHeader>Total</ColumnHeader>
                </Row>
              </thead>
              <tbody>
                {Object.keys(productos).map((id) => {
                  return <CartRow key={id} productId={id} />;
                })}
              </tbody>
            </Table>
          </TableContainer>
          <Summary />
        </>
      ) : (
        <Main>
          <h3>Add products to your cart</h3>
        </Main>
      )}
    </>
  );
};

export default CartTable;
