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
      <h2>{nombre}</h2>
      <p>{username}</p>
      <button onClick={handleClick}>
        {fav ? "Remove from Favs" : "Add to Favs"}
      </button>
    </div>
  );
}

export default Card;
