import { useState } from 'react';
import Form from '../Form';

const App = () => {
  const [message, setMessage] = useState('Não clicado');

  const handleCallback = () => {
    setMessage('OK');
  };

  return (
    <div className="App">
      <Form onSubmit={handleCallback} />
      <span>{message}</span>
    </div>
  );
};

export default App;
