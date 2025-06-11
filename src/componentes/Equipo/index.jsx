import './Equipo.css';
import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';
const Equipo = (props) => {
    //Destructuracion
    const {titulo,colorPrimario,colorSecundario,id} = props.datos
    const { colaboradores,eliminarColaborador, actualizarColor, like } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }
    return <> {colaboradores.length > 0 &&
        
        <section className='equipo'style={obj} >
        {/* puedo utilizar objetos para poner estilos o poner dobles llaves para poner los estilos ahi  */}
        <input 
        type="color" 
        className="input-color" 
        value={colorPrimario} 
        onChange={(e)=>{
            actualizarColor(e.target.value, id)
        }} /* Con onChange quitamos el error o resposabilidad al navegador de manejar el color del  input color*/
        />
        <h3 style={{ borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador,i)=> <Colaborador 
                datos={colaborador} 
                key={i} 
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
                />)
            }
        </div>
    </section>}</> //Se pone es fragment para poder poner el javaScript dentro y se hace dentro una verificacion, si la longitud del arreglo de colaboradores es mayor a 0(no hay ningun colaborador) entonces que muestre ese equipo y si no, pues no 
}

export default Equipo