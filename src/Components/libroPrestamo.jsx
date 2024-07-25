import React, { useState } from 'react';
import './libro-Prestamo.css';

function FormularioPrestamo() {
  const [nombre, setNombre] = useState('');
  const [matricula, setMatricula] = useState('');
  const [carrera, setCarrera] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de envío de formulario
    console.log('Nombre:', nombre);
    console.log('Matrícula:', matricula);
    console.log('Carrera:', carrera);
    console.log('ISBN:', isbn);
  };

  return (
    <div className="form-container">
      <h2>Préstamo de libro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre del alumno:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="matricula">Matrícula:</label>
          <input
            type="text"
            id="matricula"
            name="matricula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="carrera">Carrera:</label>
          <input
            type="text"
            id="carrera"
            name="carrera"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="isbn">ISBN del libro:</label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
          />
        </div>
        <button type="submit">Solicitar préstamo</button>
      </form>
    </div>
  );
};

export default FormularioPrestamo;
