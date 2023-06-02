import { screen, render } from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

test('displays the primary langauage of the repository', () => {
  const repository = {
    language: 'JavaScript',
    stargazers_count: 5,
    forks: 30,
    open_issues: 1,
  };

  render(<RepositoriesSummary repository={repository} />);

  const language = screen.getByText('JavaScript');

  expect(language).toBeInTheDocument();
});
