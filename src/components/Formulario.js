import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4'

const Formulario = ({crearCita}) => {
   
    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        cliente: '',
        responsable: '',
        fecha: '',
        hora: '',
        descripcion: '',
    });

    const [error, actualizarError] = useState(false)

    //funcion que se ejecuta cuando el usuario escribe en el input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    //extraer valore
    const { cliente, responsable, fecha, hora, descripcion } = cita;

    //Cuando usuario presiona agregar cita
    const submitCita = e =>{
        e.preventDefault();

     //validar
     if(cliente.trim()==='' || responsable.trim()===''|| fecha.trim()==='' || hora.trim()===''|| descripcion.trim()===''){
        actualizarError(true);
         return;
     }
     //eliminar el mensaje previo
     actualizarError(false);
    
     //asignar ID
     cita.id = uuid();

     //Crear la Cita
     crearCita(cita);

     //Reinciar Form
     actualizarCita({
        cliente: '',
        responsable: '',
        fecha: '',
        hora: '',
        descripcion: '',
     })
    }

    return (
        <Fragment>
            <h2>Crear Evento</h2>

            {error ? <p className='alerta-error'>todos los campos son obligatorios</p> :null}

            <form
                onSubmit={submitCita}
                >
                <label>Nombre Cliente</label>
                <input
                    type='text'
                    name='cliente'
                    className='u-full-width'
                    placeholder='Nombre Cliente'
                    onChange={actualizarState}
                    value={cliente}
                />

                <label>Nombre Responsable</label>
                <input
                    type='text'
                    name='responsable'
                    className='u-full-width'
                    placeholder='Nombre Responsable'
                    onChange={actualizarState}
                    value={responsable}
                />
                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={hora}

                />
                <label>Descripcion</label>
                <textarea
                    className='u-full-width'
                    name='descripcion'
                    onChange={actualizarState}
                    value = {descripcion}
                />
                <button
                    type='submit'
                    className='u-full-width button-primary'>Agregar Cita</button>


            </form>
        </Fragment>
    );
};

export default Formulario;