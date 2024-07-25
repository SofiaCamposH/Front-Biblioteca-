import React, { useState } from 'react';
import './cubi-prestamo.css';
import { Link } from 'react-router-dom';


function FormularioCubiculo() {
    const [numeroCubiculo, setNumeroCubiculo] = useState('');
    const [perteneceAEmpresa, setPerteneceAEmpresa] = useState('libre'); // Valor por defecto
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes enviar los datos a tu backend o realizar otras acciones
      console.log('Número de cubículo:', numeroCubiculo);
      console.log('Pertenece a empresa:', perteneceAEmpresa);
    };
  
    return (
      <div className="form-container">
        <h2>Registro de Cubículo</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="numeroCubiculo">Número de Cubículo:</label>
            <input
              type="number"
              id="numeroCubiculo"
              value={numeroCubiculo}
              onChange={(e) => setNumeroCubiculo(e.target.value)}
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
              <option value="empresa">Empresa</option>
            </select>
          </div>
          <button type="submit">Registrar</button>
        </form>
      </div>
    );
  }
    

export default FormularioCubiculo;
