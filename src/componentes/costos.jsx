import React from 'react'
import './costos.css'

function Costos({ datos }) {

  const base = 8000

  const factorProvincia = datos.provincia === "CABA" ? 1.25 :
                          datos.provincia === "Buenos Aires" ? 1.15 : 1.05

  const factorTipo = datos.tipoInmueble === "Departamento" ? 0.9 :
                     datos.tipoInmueble === "Casa" ? 1.2 : 1.1

  const total = Math.round(base * factorProvincia * factorTipo)

  return (
    <div className="card-costos">
      <h2 className='costo'>Costo estimado mensual</h2>
      <p className="precio">${total}</p>
      <small>*Precio aproximado sujeto a inspección y zona.</small>
    </div>
  )
}

export default Costos
