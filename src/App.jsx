import './App.css'
import Formulariodeusuario from './componentes/formulariodeusuario.jsx'
import Coberturas from './componentes/Coberturas.jsx'
import Costos from './componentes/Costos.jsx'
import { useState } from 'react'

function App() {
  const [datosUsuario, setDatosUsuario] = useState(null)
  const [historial, setHistorial] = useState(() => {
  const guardado = localStorage.getItem("historialCotizaciones")
  return guardado ? JSON.parse(guardado) : []
})
  // Función que agrega una cotización al historial
  const agregarAlHistorial = (cotizacion) => {
    const nuevoHistorial = [...historial, cotizacion]

    setHistorial(nuevoHistorial)
    localStorage.setItem("historialCotizaciones", JSON.stringify(nuevoHistorial))
  }

  //  Cuando el formulario se envía
  const manejarCotizacion = (datos) => {
    setDatosUsuario(datos)
    agregarAlHistorial(datos)
  }

  return (
    <div className="contenedor">
      <h1 className="titulo"></h1>
      <img className="logo" src={`${import.meta.env.BASE_URL}log.png`} alt="logo" />





      <Formulariodeusuario onCotizar={manejarCotizacion} />

      {datosUsuario && (
        <>
          <Coberturas datos={datosUsuario} />
          <Costos datos={datosUsuario} />
        </>
      )}

      {/*  MOSTRAR HISTORIAL */}
      {historial.length > 0 && (
        <div className="card">
          <h2 className='titulo'>Historial de Cotizaciones</h2>

          <ul className="lista">
            {historial.map((c, i) => (
              <li key={i}>
                <strong>{c.firstName} {c.lastname}</strong> — {c.tipoInmueble} en {c.ciudad}, {c.provincia}<br />
                Tel: {c.telephone} - Email: {c.email}
              </li>
            ))}
          </ul>

          <button
            className="btn"
  
            onClick={() => {
              setHistorial([])
              localStorage.removeItem("historialCotizaciones")
            }}
          >
            Borrar historial
          </button>
        </div>
      )}
    </div>
  )
}

export default App

