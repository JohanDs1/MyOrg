import './Footer.css';

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='redes'>
        <a href='#'>
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='#'>
            <img src="/img/twitter.png" alt='twitter' />
        </a>
        <a href='#'>
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img className='logo' src='/img/Logo.png' alt='org' />
    <strong>Desarrollado por Johan Bermeo</strong>
</footer>
} 

export default Footer;