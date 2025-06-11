import { useState } from 'react';
import './Campo.css'

const CampoTexto = ({ titulo, placeholder, required, valor, actualizarValor, type = "text" }) => {

    const manejarCambio = (e) => {
        actualizarValor(e.target.value)
    }

    const placeholderModificado = `${placeholder}...` 
    return <div className={`campo campo-${type}`}>
        <label >{titulo}
            <input
                placeholder={placeholderModificado} required={required} value={valor} onChange={manejarCambio}
                type={type}
            />
        </label>
    </div>
}

export default CampoTexto