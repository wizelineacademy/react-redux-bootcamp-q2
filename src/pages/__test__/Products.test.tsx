import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Products from './../Products';

const pageRender = () => {
  render(<Products />);
};

describe('Products Page', () => {
  it('Should loader dissapear when the list of products is render', async () => {
    pageRender();

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
