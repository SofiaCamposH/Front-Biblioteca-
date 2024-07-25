import React from 'react';
import './Computadoras.css';
import Background from './Assets/comp-bg.png'
import { Link } from 'react-router-dom';
import FormularioComputadora from './Compu-prestamo';

const Computadoras = () => {
  return (

    <div className='computadorasContainer'>
      <div className="computadoras">
        <div className="botones-com">
          
          <div>
        <Link to = "./Prestamo">
            <button>Préstamo</button>
        </Link>
          </div>
          <div>
            <button>Prestados</button>
          </div>
          <div>
            <button>Disponibles</button>
          </div>
          <div>
            <button>Reportes</button>
          </div>
        </div>
      </div>
      <img src={Background} alt='' className='backgroundComputadoras' />
    </div>
  );
};

export default Computadoras;