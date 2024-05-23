import React, { useState } from 'react';
import Card from './Card';

function App() {
  const [name, setName] = useState('');
  const [movie, setMovie] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // aca hago la validacion del nombre para que no sea menor a 3 caract
    if (name.trim().length < 3) {
      setError('El nombre debe tener al menos 3 caracteres y no debe contener espacios en blanco al comienzo');
      setSubmitted(false);
      return;
    }

    // aca la validacion de la pelicula
    if (movie.trim().length < 6) {
      setError('Por favor ingresa una película válida');
      setSubmitted(false);
      return;
    }

    // Si no hay errores en las validaciones seteamos setSubmitted en true
    setSubmitted(true);
    setError('');
  };

  return (
    <div className="App">
      <h1>Elige tu película favorita</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Pelicula favorita"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {submitted && <Card name={name} movie={movie} />}
    </div>
  );
}

export default App;
