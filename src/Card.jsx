import React from 'react';
import './index.css'; // Importamos estilos adicionales

function Card({ name, movie }) {
  return (
    <div className="card">
      <h2 className="name">Nombre: {name}</h2>
      <h3 className="movie">Pelicula favorita: {movie}</h3>
      <p className="comment">Muy buena elección de película</p>
    </div>
  );
}

export default Card;

