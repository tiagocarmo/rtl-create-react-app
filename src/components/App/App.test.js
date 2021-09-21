import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor
} from '@testing-library/react';

import App from '.';

describe('Testing App', () => {
  afterEach(() => cleanup());

  test('Verifica a mensagem na condição inicial do componente', () => {
    render(<App />);
    const appMessage = screen.getByText(/Não/i);
    expect(appMessage).toBeInTheDocument();
  });

  test('Verifica se pós interação, a mensagem alterada', async () => {
    render(<App />);
    const name = 'Tiago';
    const city = 'BH';

    const inputName = screen.getByPlaceholderText('Digite seu nome');
    fireEvent.change(inputName, { target: { value: name } });
    fireEvent.blur(inputName);

    const selectCity = screen.getByPlaceholderText('Selecione');
    fireEvent.change(selectCity, { target: { value: city } });
    fireEvent.blur(selectCity);

    const buttonSubmit = screen.getByText('Enviar');
    fireEvent.click(buttonSubmit);

    await waitFor(() => {
      const appMessageNot = screen.queryByText(/Não/i);
      expect(appMessageNot).not.toBeInTheDocument();

      const appMessage = screen.queryByText(/OK/i);
      expect(appMessage).toBeInTheDocument();
    });
  });
});
