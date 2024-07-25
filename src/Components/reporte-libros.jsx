import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Reportes() {
  
    return (
        <div className="form-container">
            <h2>Reportes</h2>
            <form>
                <label htmlFor="nombre">Nombre del alumno:</label>
                <input type="text" id="nombre" name="nombre" required />
                
                <label htmlFor="matricula">Matrícula:</label>
                <input type="text" id="matricula" name="matricula" required />
                
                <label htmlFor="carrera">Carrera:</label>
                <input type="text" id="carrera" name="carrera" required />
                
                <label htmlFor="isbn">Descripción del reporte:</label>
                <input type="text" id="reporte" name="reporte " required />
                
                <button type="submit">Hacer reporte</button>
            </form>
        </div>
    );
};


export default Reportes;
