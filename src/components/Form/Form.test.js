import {
  render,
  screen,
  fireEvent,
  waitFor
} from '@testing-library/react';

import Form from '../Form';

describe('Testing Form', () => {
  const mockCallback = jest.fn();

  test('O botao deve estar desabilitado, se o input nao tiver valor', () => {
    render(<Form />);
    const buttonSubmit = screen.getByText('Enviar');
    expect(buttonSubmit).toBeInTheDocument();
    expect(buttonSubmit).toHaveAttribute('disabled');
  });

  test('O botao deve estar habilitado, se o input tiver valor', () => {
    render(<Form />);

    const inputName = screen.getByPlaceholderText('Digite seu nome');
    fireEvent.change(inputName, { target: { value: 'Tiago' } });
    fireEvent.blur(inputName);

    const buttonSubmit = screen.getByText('Enviar');
    expect(buttonSubmit).not.toHaveAttribute('disabled');
  });

  test('Não deve chamar o callback caso o botão esteja desabilitado', () => {
    render(<Form onSubmit={mockCallback} />);

    const buttonSubmit = screen.getByText('Enviar');
    expect(buttonSubmit).toHaveAttribute('disabled');

    fireEvent.click(buttonSubmit);
    expect(mockCallback).not.toBeCalled();
  });

  test('Deve chamar o callback, se o botao deve estiver habilitado', async () => {
    render(<Form onSubmit={mockCallback} />);

    const inputName = screen.getByPlaceholderText('Digite seu nome');
    fireEvent.change(inputName, { target: { value: 'Tiago' } });
    fireEvent.blur(inputName);

    const buttonSubmit = screen.getByText('Enviar');
    fireEvent.click(buttonSubmit);

    await waitFor(() => expect(mockCallback).toBeCalled());
  });

  test('Deve preencher o select', async () => {
    render(<Form onSubmit={mockCallback} />);
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
      expect(mockCallback).toBeCalledWith({
        name,
        city
      });
    });
  });
});
