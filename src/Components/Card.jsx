import { useState } from "react";
import styles from "./Card.module.css";
function Card({ nombre, username, esFav, handleFav }) {
  const [fav, setFav] = useState(esFav);
  function handleClick() {
    setFav(!esFav);
    handleFav(nombre, esFav);
  }

  return (
    <div className={styles.card}>
      <img src="../images/doctor.jpg" alt="doctor" style={{ width: "150px"}}/>
      <p>{nombre}</p>
      <p>{username}</p>
      <button onClick={handleClick}>
        {fav ? <img src="../images/no-fav.png" alt="no-fav" style={{ width: "15px"}}/> 
            : <img src="../images/fav.png" alt="fav" style={{ width: "15px"}}/>}
      </button>
    </div>
  );
}

export default Card;
