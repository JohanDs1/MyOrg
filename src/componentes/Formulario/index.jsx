import { useState } from 'react';
import './Formulario.css';
import Campo from '../Campo';
import ListaOpciones from '../ListaOpciones';
import Boton from '../Boton';
const Formulario = ({ equipos,registrarColaborador,crearEquipo }) => {
    const [nombre,setNombre] = useState("")
    const [puesto,setPuesto] = useState("")
    const [foto,setFoto] = useState("")
    const [equipo,setEquipo] = useState("")

    const [titulo, setTitulo] = useState("")
    const [color , setColor] = useState("")


    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo,colorPrimario: color })
    }

    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
            titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required
            valor={nombre}
            actualizarValor={setNombre}
            />
            <Campo 
            titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required
            valor={puesto}
            actualizarValor={setPuesto}
            />
            <Campo 
            titulo="Foto"   
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto}
            actualizarValor={setFoto}
            />
            <ListaOpciones 
            valor={equipo}
            actualizarEquipo={setEquipo}
            equipos={equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
            titulo="Titulo" 
            placeholder="Ingresar titulo" 
            required
            valor={titulo}
            actualizarValor={setTitulo}
            />
            <Campo 
            titulo="Color" 
            placeholder="Ingresar el color en Hex" 
            required
            valor={color}
            actualizarValor={setColor}
            type="color"
            />
            <Boton>Registrar Equipo</Boton>
        </form>
    </section>
}

export default Formulario