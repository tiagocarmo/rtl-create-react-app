import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  const handleClick = () => {
    onSubmit({
      name,
      city
    });
  };

  return (
    <form name='form'>
      <label htmlFor='name'>Nome</label>
      <input
        type='text'
        name='name'
        id='name'
        placeholder='Digite seu nome'
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name && <p>Preenchido</p>}
      {!name && <p>Oh nooo</p>}
      <Select
        name='city'
        id='city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder='Selecione'
      >
        <MenuItem value='BH'>BH</MenuItem>
        <MenuItem value='SP'>SP</MenuItem>
        <MenuItem value='SSA'>SSA</MenuItem>
      </Select>
      <button
        type='button'
        name='enviar'
        disabled={!name}
        onClick={() => handleClick()}
      >
        Enviar
      </button>
    </form>
  );
};

export default Form;
