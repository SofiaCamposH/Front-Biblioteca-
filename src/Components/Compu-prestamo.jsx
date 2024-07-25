import React, { useState } from 'react';
import './computadora-prestamo.css'; // Update CSS class name
import { Link } from 'react-router-dom';

function FormularioComputadora() { // Update function name
  const [numeroComputadora, setNumeroComputadora] = useState(''); // Update state variable names
  const [perteneceAEmpresa, setPerteneceAEmpresa] = useState('libre'); // Valor por defecto

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos a tu backend o realizar otras acciones
    console.log('Número de computadora:', numeroComputadora);
    console.log('Ocupado:', perteneceAEmpresa);
  };

  return (
    <div className="form-container">
      <h2>Registro de Computadora</h2>  {/* Update title */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="numeroComputadora">Número de Computadora:</label>  {/* Update label text */}
          <input
            type="number"
            id="numeroComputadora"
            value={numeroComputadora}
            onChange={(e) => setNumeroComputadora(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="perteneceAEmpresa">Pertenece a empresa:</label>
          <select
            id="perteneceAEmpresa"
            value={perteneceAEmpresa}
            onChange={(e) => setPerteneceAEmpresa(e.target.value)}
          >
            <option value="libre">Libre</option>
            <option value="Ocupado">Ocupado</option>
          </select>
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default FormularioComputadora;
