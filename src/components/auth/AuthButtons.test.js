import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { createServer } from '../../test/server';
import AuthButtons from './AuthButtons';

async function renderComponent() {
  render(
    <MemoryRouter>
      <AuthButtons />
    </MemoryRouter>
  );
  await screen.findAllByRole('link');
}

describe('When the user is not signed in', () => {
  createServer([
    {
      path: '/api/user',
      res: () => {
        return { user: null };
      },
    },
  ]);

  test('when user is NOT signed in, sign in and sign up are visible', async () => {
    await renderComponent();

    const signInButton = screen.getByRole('link', { name: /sign in/i });
    const signUpButton = screen.getByRole('link', { name: /sign up/i });

    expect(signInButton).toBeInTheDocument();
    expect(signInButton).toHaveAttribute('href', '/signin');
    expect(signUpButton).toBeInTheDocument();
    expect(signUpButton).toHaveAttribute('href', '/signup');
  });

  test('when user is NOT signed in, sign out is not visible', async () => {
    await renderComponent();
  });
});

// describe('When the user is signed in', () => {
//   createServer([
//     {
//       path: '/api/user',
//       res: () => {
//         return { user: { id: 3, email: 'asdf@asdf.com' } };
//       },
//     },
//   ]);

//   test('when user IS signed in, sign in and sign up are not visible', async () => {
//     renderComponent();
//   });

//   test('when user IS signed in, sign out is visible', async () => {
//     renderComponent();
//   });
// });
