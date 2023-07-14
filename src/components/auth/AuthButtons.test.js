import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { createServer } from '../../test/server';
import AuthButtons from './AuthButtons';

describe('When the user is not signed in', () => {
  createServer([
    {
      path: '/api/user',
      res: () => {
        return { user: null };
      },
    },
  ]);

  test('when user is not signed in, sign in and sign up are visible', async () => {});

  test('when user is not signed in, sign out is not visible', async () => {});
});

describe('When the user is signed in', () => {
  createServer([
    {
      path: '/api/user',
      res: () => {
        return { user: { id: 3, email: 'asdf@asdf.com' } };
      },
    },
  ]);

  test('when user is signed in, sign in and sign up are not visible', async () => {});

  test('when user is signed in, sign out is visible', async () => {});
});
