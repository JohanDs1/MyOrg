import './MiOrg.css';
const MiOrg = ({ cambiarMostrar }) => {

    return <section className="orgSection">
        <h3 className='title'>Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={cambiarMostrar} />
    </section>

}


export default MiOrg