import {
  render,
  screen,
  cleanup
} from '@testing-library/react';

import App from '.';

jest.mock('../Form', () => ({
  __esModule: true,
  default: () => <div data-testid='form' />
}));

describe('Testing App', () => {
  afterEach(() => cleanup());

  test('Verifica se o form é renderizado (pelo mock)', () => {
    render(<App />);
    const formComponent = screen.getByTestId('form');
    expect(formComponent).toBeInTheDocument();
  });
});
