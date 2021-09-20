import {
  render,
  screen,
  cleanup,
  fireEvent
} from '@testing-library/react';
import Chance from 'chance';

import App from '.';

const chance = new Chance();

describe('Testes que podem ser feitos', () => {
  afterEach(() => {
    cleanup();
  });

  test('Renderizar componente na tela (básico)', () => {
    render(<App />);
    const linkElement = screen.getByRole('link', { name: /learn react/i });
    expect(linkElement).toBeInTheDocument();
  });

  test('Contar se a quantidade de um tipo de componente esta certa (lista)', () => {
    render(<App />);
    // get all para pegar quantidade
    const linkElement = screen.getAllByRole('link', { name: /learn react/i });
    expect(linkElement).toHaveLength(1);
  });

  test('Verificar o valor de um atributo (se tem)', () => {
    render(<App />);
    const buttonDisabled = screen.getByRole('button', { name: /Desabilitado/i });
    expect(buttonDisabled).toHaveAttribute('disabled');
  });

  test('Verificar o valor de um atributo (se não tem)', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /Habilitado/i });
    expect(button).not.toHaveAttribute('disabled');
  });

  test('Verificar se imagem é acessivel (se tem alt)', () => {
    render(<App />);
    const image = screen.getByAltText('logo');
    expect(image).toBeInTheDocument();
  });

  test('Verificar se props está sendo passada', () => {
    const message = chance.sentence();
    render(<App message={message} />);
    const messageProps = screen.getByText(message);
    expect(messageProps).toBeInTheDocument();
  });

  test('Verificar se props com valor default funciona', () => {
    const defaultMessageProps = 'default';
    render(<App />);
    const messageProps = screen.getByText(defaultMessageProps);
    expect(messageProps).toBeInTheDocument();
  });

  test('Verificar se props passada como funcção (callback) é execultada', () => {
    const mockFunction = jest.fn();
    render(<App customFunction={mockFunction} />);
    const button = screen.getByRole('button', { name: /Habilitado/i });
    fireEvent.click(button);
    expect(mockFunction).toBeCalled();
  });

  test('Verificar se props passada como funcção (callback) não é execultada (se não clicar)', () => {
    const mockFunction = jest.fn();
    render(<App customFunction={mockFunction} />);
    expect(mockFunction).not.toBeCalled();
  });
});
