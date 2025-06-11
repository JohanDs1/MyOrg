import { useState } from 'react';
import './index.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
import { v4 as uuid } from 'uuid';

function App() {
  const [mostrarFormulario, setFormulario] = useState(false)
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: true,
    },
    {
      equipo: "Programación",
      foto: "https://github.com/johanDs1.png",
      nombre: "Johan Bermeo",
      puesto: "Desarrollador Junior full Stack",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Innovación y  Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false,
    }
])
  const [equipos, actualizarEquipos]  = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: getComputedStyle(document.documentElement).getPropertyValue('--green1'),
      colorSecundario: getComputedStyle(document.documentElement).getPropertyValue('--green2')
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: getComputedStyle(document.documentElement).getPropertyValue('--cyan1'),
      colorSecundario: getComputedStyle(document.documentElement).getPropertyValue('--cyan2')
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: getComputedStyle(document.documentElement).getPropertyValue('--green3'),
      colorSecundario: getComputedStyle(document.documentElement).getPropertyValue('--green4')
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: getComputedStyle(document.documentElement).getPropertyValue('--red1'),
      colorSecundario: getComputedStyle(document.documentElement).getPropertyValue('--red2')
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: getComputedStyle(document.documentElement).getPropertyValue('--pink1'),
      colorSecundario: getComputedStyle(document.documentElement).getPropertyValue('--pink2')
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: getComputedStyle(document.documentElement).getPropertyValue('--orange1'),
      colorSecundario: getComputedStyle(document.documentElement).getPropertyValue('--orange2')
    },
    {
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: getComputedStyle(document.documentElement).getPropertyValue('--orange3'),
      colorSecundario: getComputedStyle(document.documentElement).getPropertyValue('--orange4')
    },

  ])

  const cambiarMostrar = () => {
    setFormulario(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id !== id)
    setColaboradores(nuevosColaboradores)
  }

  const actualizarColor = (color,id) => {
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario= color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) =>{
    actualizarEquipos([...equipos, { ...nuevoEquipo, id:uuid() }])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(colaboradoresActualizados)
  }

  return (
    <>
      <Header />
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => { return equipo.titulo }
      )}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      /> /* : <></>  */}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }
      <Footer />
    </>
  )
}

export default App
