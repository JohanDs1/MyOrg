import './ListaOpciones.css'

const ListaOpciones = ({valor,actualizarEquipo,equipos}) => {

    const manejarCambio = (e) => {
        actualizarEquipo(e.target.value)
    }

    return <div className='lista-opciones'>
        <label >Equipos</label>
        <select value={valor} onChange={manejarCambio}>
            <option hidden disabled value="" defaultValue="">Seleccionar Equipo</option>
           {
                equipos.map( (equipo,i) => {return <option key={i} value={equipo}>{equipo}</option>})
            }
        </select>
    </div>

}

export default ListaOpciones