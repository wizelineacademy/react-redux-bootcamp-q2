// import React from 'react';
// import { render, screen, act, within } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { Login } from './../Login';

// // afterEach(cleanup);
// interface I_fromRender {
//   userInput: HTMLElement;
//   passInput: HTMLElement;
//   buttonEl: HTMLElement;
// }

// const formRender: () => I_fromRender = () => {
//   render(<Login />);
//   const userInput = screen.getByLabelText(/username/i);
//   const passInput = screen.getByLabelText(/password/i);
//   const buttonEl = screen.getByRole('button');
//   return { userInput, passInput, buttonEl };
// };

// describe('Login Page', () => {
//   it('Should have 2 input and 1 button', () => {
//     const { userInput, passInput, buttonEl } = formRender();

//     expect(userInput).toBeInTheDocument();
//     expect(passInput).toBeInTheDocument();
//     expect(buttonEl).toBeInTheDocument();
//   });
//   it('Should only show the alert if inputs are empty', async () => {
//     const { userInput, passInput, buttonEl } = formRender();

//     await act(() => {
//       userEvent.click(buttonEl);
//     });

//     const alertUserEl = screen.getByRole('alert');

//     // Error username
//     expect(alertUserEl).toBeInTheDocument();
//     expect(
//       within(alertUserEl).getByText(/username/i, { exact: false })
//     ).toBeInTheDocument();

//     await act(() => {
//       userEvent.type(userInput, 'myUser');
//       userEvent.click(buttonEl);
//     });

//     const alertPasswordEl = screen.getByRole('alert');

//     expect(alertPasswordEl).toBeInTheDocument();
//     expect(
//       within(alertPasswordEl).getByText(/password/i, { exact: false })
//     ).toBeInTheDocument();

//     await act(() => {
//       userEvent.type(passInput, 'jiji');
//       userEvent.click(buttonEl);
//     });

//     // ).toBeInTheDocument();

//     const titleEL = screen.getByRole('heading');

//     expect(titleEL.textContent).toMatch(/wizestore/i);
//   });
//   it('Should user login when fill with correct info', async () => {
//     const { userInput, passInput, buttonEl } = formRender();

//     userEvent.type(userInput, 'wizeline');
//     userEvent.type(passInput, 'Rocks!');
//     userEvent.click(buttonEl);

//     const titleEL = await screen.findByRole('heading', { name: /Wizeline/i });

//     expect(titleEL.textContent).toMatch(/Wizeline!/i);
//   });
// });
