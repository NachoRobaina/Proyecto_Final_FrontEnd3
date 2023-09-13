import { useContext } from "react";
import { ContextGlobal } from "./utils/ContextGlobal";
import styles from "./Footer.module.css";
function Footer() {
  const temaContext = useContext(ContextGlobal);

  return (
    <footer className={temaContext.theme}>
      <div className={styles.footer}>
        <p>Powered by</p>
        <img src="../images/DH.png" alt="DH-logo" style={{ width: "200px"}}/>
      </div>
      <div>
        <img src="../images/ico-facebook.png" alt="Facebook icon" style={{ width: "30px"}} />
        <img src="../images/ico-instagram.png" alt="instagram icon" style={{ width: "30px"}}/>
        <img src="../images/ico-tiktok.png" alt="tiktok icon" style={{ width: "30px"}}/>
        <img src="../images/ico-whatsapp.png" alt="whatsapp icon" style={{ width: "30px"}}/>
      </div>
    </footer>
  );
}

export default Footer;
