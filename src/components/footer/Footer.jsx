
import './footer.css';
const Footer = () => {
  return (

    <>
      <footer className="footer">
        <div className="footer-contenido">

          <div className="footer-links-left">
            <p>Quiénes somos</p>
            <p>Contáctanos</p>
          </div>
          <div className="footer-app">
            <img src="/googlePlay.png" alt="googlePlay" />
            <img src="/Imagen appStore.png" alt="appStore" />
          </div>

          <div className="footer-links-right">
            <p>Políticas de privacidad</p>
            <p>Términos de uso</p>
          </div>
        </div>
      </footer >
    </>
  );
};
export default Footer;
