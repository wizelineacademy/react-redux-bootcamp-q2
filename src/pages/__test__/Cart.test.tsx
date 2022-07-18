// import React from 'react';
// import { render, screen, within } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import {
//   Cart,
//   totalPriceByProduct,
//   totalPrice,
//   totalProducts
// } from './../Cart';

// import { getStorage } from '../../utils/sessionStorage';
// import { productMock } from './../../components/__test__/Product.test';

// const PRODUCT_1 = {
//   name: 'test 1',
//   price: 10,
//   quantity: 3,
//   id: 23424234
// };

// const PRODUCT_2 = {
//   name: 'test 2',
//   price: 50,
//   quantity: 3,
//   id: 99099
// };

// const product1 = { ...productMock, ...PRODUCT_1 };
// const product2 = { ...productMock, ...PRODUCT_2 };

// jest.mock('../../utils/sessionStorage', () => ({
//   __esModule: true,
//   default: null,
//   getStorage: jest.fn(),
//   addItemOnStorage: jest.fn(),
//   removeItemOnStorage: jest.fn()
// }));

// describe('Cart page', () => {
//   it('Should not show any product if store is empty', () => {
//     (getStorage as jest.Mock).mockReturnValue(() => []);

//     render(
//       <BrowserRouter>
//         <Cart />
//       </BrowserRouter>
//     );

//     const messageEL = screen.getByText(/no products/i);

//     expect(messageEL).toBeInTheDocument();
//   });

//   it('Should show a list of products with specific structure', () => {
//     (getStorage as jest.Mock).mockReturnValue(() => [product1, product2]);

//     render(
//       <BrowserRouter>
//         <Cart />
//       </BrowserRouter>
//     );

//     const trs = screen.getAllByRole('row');

//     // 1 for the head and 2 for the producs
//     expect(trs.length).toBe(3);

//     // first should be the header of the table
//     const tbHeaderEls = trs[0].childNodes;
//     expect(tbHeaderEls[0].nodeName).toBe('TH');

//     // Should have following structure
//     expect(tbHeaderEls[0].textContent).toBe('');
//     expect(tbHeaderEls[1].textContent).toMatch(/product details/i);
//     expect(tbHeaderEls[2].textContent).toMatch(/quantity/i);
//     expect(tbHeaderEls[3].textContent).toMatch(/price/i);
//     expect(tbHeaderEls[4].textContent).toMatch(/total/i);

//     const tbProductEls = trs[1].childNodes;
//     expect(tbProductEls[1].textContent).toBe(PRODUCT_1.name);
//     expect(tbProductEls[2].textContent).toBe(`${PRODUCT_1.quantity}`);
//     expect(tbProductEls[3].textContent).toBe(`$${PRODUCT_1.price}`);
//     expect(tbProductEls[4].textContent).toBe(
//       `$${totalPriceByProduct(PRODUCT_1.price, PRODUCT_1.quantity)}`
//     );
//   });

//   it('Should be able to reduce or add quantity', async () => {
//     (getStorage as jest.Mock).mockReturnValue(() => [product1, product2]);

//     render(
//       <BrowserRouter>
//         <Cart />
//       </BrowserRouter>
//     );

//     const trs = screen.getAllByRole('row');

//     // 1 for the head and 2 for the producs
//     expect(trs.length).toBe(3);

//     // first should be the header of the table
//     const tbHeaderEls = trs[0].childNodes;
//     expect(tbHeaderEls[0].nodeName).toBe('TH');

//     const tbProductEls: HTMLElement | any = trs[1].childNodes;

//     const removeButton = within(tbProductEls[2]).getByTestId(
//       'RemoveCircleIcon'
//     );
//     const addButton = within(tbProductEls[2]).getByTestId('AddCircleIcon');

//     expect(removeButton).toBeInTheDocument();
//     expect(addButton).toBeInTheDocument();
//   });

//   it('Should have a summary section', async () => {
//     const store = [product1, product2];
//     (getStorage as jest.Mock).mockReturnValue(() => store);

//     render(
//       <BrowserRouter>
//         <Cart />
//       </BrowserRouter>
//     );

//     const summaryEl = screen.getByRole('status');

//     // TotalProduct
//     const totalProductsEl = within(summaryEl).getByText(totalProducts(store));
//     expect(totalProductsEl).toBeInTheDocument();
//     expect(totalProductsEl.textContent).toBe('6');

//     // TotalPrices
//     const totalPriceEl = within(summaryEl).getByText(`$${totalPrice(store)}`);
//     expect(totalPriceEl).toBeInTheDocument();
//     expect(totalPriceEl.textContent).toBe('$180.00');
//   });
// });
