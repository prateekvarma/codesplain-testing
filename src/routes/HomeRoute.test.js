import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router';
import HomeRoute from './HomeRoute';

const handlers = [
  rest.get('/api/resources', (req, res, ctx) => {
    const query = req.url.searchParams.get('q');
    console.log(query);

    return res(
      ctx.json({
        items: [
          { id: 1, full_name: 'full name!' },
          { id: 2, full_name: 'full name 2!' },
        ],
      })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
