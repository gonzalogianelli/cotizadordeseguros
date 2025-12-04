import React from 'react'
import './coberturas.css'

function Coberturas({ datos }) {

  //  Mismo cálculo base que en Costos.jsx
  const base = 8000;

  const factorProvincia =
    datos.provincia === "CABA" ? 1.25 :
    datos.provincia === "Buenos Aires" ? 1.15 : 1.05;

  const factorTipo =
    datos.tipoInmueble === "Departamento" ? 0.9 :
    datos.tipoInmueble === "Casa" ? 1.2 : 1.1;

  const precioBase = Math.round(base * factorProvincia * factorTipo);

  //  Precios por cada plan
  const precioBasico = Math.round(precioBase * 0.8);
  const precioIntermedio = Math.round(precioBase * 1.0);
  const precioPremium = Math.round(precioBase * 1.3);

  return (
    <div className="card">
      <h2 className='titulo'>Opciones de Cobertura</h2>

      <ul className="lista">
        <li>
          <strong>Plan Básico</strong><br />
          Daños por incendio + RC hogar <br />
          💰 <strong>${precioBasico}</strong>
        </li>

        <li>
          <strong>Plan Intermedio</strong><br />
          Incendio + Robo + Roturas + RC <br />
          💰 <strong>${precioIntermedio}</strong>
        </li>

        <li>
          <strong>Plan Premium</strong><br />
          Incendio + Robo + Roturas + Electrodomésticos + RC + Daños por agua <br />
          💰 <strong>${precioPremium}</strong>
        </li>
      </ul>
    </div>
  )
}

export default Coberturas