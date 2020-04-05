import React from 'react';

const Cita = ({cita, eliminarCita}) => (
        <div className='cita'>
            <p>Cliente:<span>{cita.cliente}</span></p>
            <p>Responsable:<span>{cita.responsable}</span></p>
            <p>Fecha:<span>{cita.fecha}</span></p>
            <p>Hora:<span>{cita.hora}</span></p>
            <p>Descripcion:<span>{cita.descripcion}</span></p>
            
            <button className='button eliminar w-full-width' onClick={() => eliminarCita(cita.id)}>
            Eliminar &times;
            </button>
        </div>
    );
;

export default Cita;