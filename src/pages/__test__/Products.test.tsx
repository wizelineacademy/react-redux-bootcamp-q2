import React from 'react';
import { screen } from '@testing-library/react';
import { Products } from './../../pages';
import { renderWithStore } from '../../utils/test-utils';

const render = () => {
  renderWithStore(<Products />, {});
};

describe('Products Page', () => {
  it('Should loader dissapear when the list of products is render', async () => {
    render();

    const loaderEl = screen.getByRole('progressbar');
    // Loader is showed
    expect(loaderEl).toBeInTheDocument();

    const productsEl = await screen.findByRole('document');
    // Loader dissapear, because products are fetch
    expect(loaderEl).not.toBeInTheDocument();

    // Products container
    expect(productsEl).toBeInTheDocument();

    // Each product is a child
    expect(productsEl.childElementCount).toBeGreaterThan(1);
  });
});
