import { rest } from 'msw';
import data from './data/products.json';

export const handlers = [
  // Becuase Localhost
  // https://mswjs.io/docs/recipes/using-local-https
  rest.get(
    'https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api/products',
    (req, res, ctx) => {
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json(data)
      );
    }
  )
];
