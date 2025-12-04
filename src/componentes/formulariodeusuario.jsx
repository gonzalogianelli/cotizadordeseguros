import React from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './formulariodeusuario.css'

const provincias = ["Buenos Aires","CABA","Córdoba","Santa Fe","Mendoza"]
const tiposInmueble = ["Casa","Departamento","PH","Dúplex","Otro"]

const validate = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, 'El nombre es muy corto')
    .max(18, 'El nombre es muy largo')
    .required('Este campo es obligatorio'),

  lastname: Yup.string()
    .trim()
    .min(2, 'El apellido es muy corto ')
    .max(15, 'El apellido es muy largo')
    .required('Este campo es obligatorio'),

  telephone: Yup.string()
    .matches(/^[0-9]+$/, "Solo números")
    .required('El teléfono es obligatorio'),

  email: Yup.string()
    .email('Formato inválido')
    .required('El email es obligatorio'),

  provincia: Yup.string().required('Seleccione provincia'),

  ciudad: Yup.string()
    .min(2, 'Muy corto')
    .required('Campo obligatorio'),

  tipoInmueble: Yup.string().required('Seleccione un tipo'),

  message: Yup.string()
    .min(10, 'Min. 10 caracteres')
    .max(250, 'Máximo 250'),
})

function Formulariodeusuario({ onCotizar }) {
  return (
    <div className="form-card">
      <h2 className='titulo'>Datos del titular e inmueble</h2>

      <Formik
        initialValues={{
          firstName: "",
          lastname: "",
          telephone: "",
          email: "",
          provincia: "",
          ciudad: "",
          tipoInmueble: "",
          message: ""
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          Object.keys(values).forEach(k => {
            values[k] = values[k].trim().replace(/\s+/g, " ")
          })

          onCotizar(values)
          resetForm()
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className="form">
         
            <div>
              <label>Nombre</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component="div" className="error" />
            </div>

        
            <div>
              <label>Apellido</label>
              <Field type="text" name="lastname" />
              <ErrorMessage name="lastname" component="div" className="error" />
            </div>

           
            <div>
              <label>Teléfono</label>
              <Field type="text" name="telephone" />
              <ErrorMessage name="telephone" component="div" className="error" />
            </div>

            
            <div>
              <label>Email</label>
              <Field type="text" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

          
            <div>
              <label>Provincia</label>
              <Field as="select" name="provincia">
                <option value="">Seleccionar</option>
                {provincias.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </Field>
              <ErrorMessage name="provincia" component="div" className="error" />
            </div>

           
            <div>
              <label>Ciudad</label>
              <Field type="text" name="ciudad" />
              <ErrorMessage name="ciudad" component="div" className="error" />
            </div>

            <div>
              <label>Tipo de inmueble</label>
              <Field as="select" name="tipoInmueble">
                <option value="">Seleccionar</option>
                {tiposInmueble.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </Field>
              <ErrorMessage name="tipoInmueble" component="div" className="error" />
            </div>

           
            <div>
              <label>Mensaje</label>
              <Field as="textarea" name="message" />
              <ErrorMessage name="message" component="div" className="error" />
            </div>

            <button type="submit" className="btn">Cotizar</button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Formulariodeusuario
