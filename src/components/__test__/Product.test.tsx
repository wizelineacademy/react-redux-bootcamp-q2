import React from 'react';
import { render, screen } from '@testing-library/react';
import Products from './../Product';

const productMock = {
  id: 1,
  name: '85" QN95B Samsung Neo QLED 4K Smart TV (2022)',
  price: 5999.99,
  description:
    'Quantum Matrix with Mini LEDs Brilliant details shine even in daylight with Quantum Matrix Technology. Powered by a huge grid of Samsung’s ultra-precise Quantum Mini LEDs, it takes exact control of the individual zones of light in your picture for breathtaking color and contrast.',
  images: [
    'https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QS95B_QN95B_QN85B_Q80B_Q70B_Q-Symphony_PC_708xV.jpg?$feature-benefit-jpg',
    'https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QN85B_Q80B_100_Color_Volume_with_Quantum_Dot_PC_708xV.jpg?$feature-benefit-jpg',
    'https://image-us.samsung.com/SamsungUS/home/easy-asset/05192022/2022_QLED_Features_EyeComfort_Mode_4K_PC_708xV.jpg?$feature-benefit-jpg'
  ],
  categories: ['Television & video']
};

const productRender = () => {
  render(<Products item={productMock} />);
};

describe('Products', () => {
  it('should show the img', () => {
    productRender();

    const imgEl = screen.getByRole('img');
    expect(imgEl).toBeInTheDocument();
  });

  it('should show the name', () => {
    productRender();

    const nameEl = screen.getByRole('heading', { level: 1 });
    expect(nameEl).toBeInTheDocument();
  });

  it('should show first category', () => {
    productRender();

    const categoryEl = screen.getByRole('heading', { level: 6 });
    expect(categoryEl).toBeInTheDocument();
    expect(categoryEl.textContent).toEqual(productMock.categories[0]);
  });

  it('should show the price', () => {
    productRender();

    const priceEl = screen.getByText(productMock.price, {
      exact: false,
      selector: 'p'
    });
    expect(priceEl).toBeInTheDocument();
  });

  it('should show have "add to the cart" button', () => {
    productRender();

    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toBeInTheDocument();

    expect(buttonEl.textContent).toMatch(/add to cart/i);
  });
});
