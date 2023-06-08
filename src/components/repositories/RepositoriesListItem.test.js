import { render, screen } from '@testing-library/react';
import RepositoriesListItem from './RepositoriesListItem';
import { MemoryRouter } from 'react-router';

function renderComponent() {
  const repository = {
    full_name: 'facebook/react',
    language: 'JavaScript',
    description: 'A JS library',
    owner: 'facebook',
    name: 'react',
    html_url: 'https://github.com/facebook/react',
  };

  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
}

test('shows a link to the github homepage for this repository', () => {
  renderComponent();
});
