import { useState } from "react";
import styles from "./Form.module.css";
export default function Form() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  function manejarSubmit(e) {
    e.preventDefault();
    if (nombre[0] === " ") {
      setError("El nombre no puede comenzar con un espacio");
    } else if (nombre.length < 6) {
      setError("El nombre debe tener más de 5 caracteres");
    } else {
      setExito(`Gracias ${nombre}! Te contactaremos cuanto antes via email.`);
      setNombre("");
      setEmail("");
    }
  }

  return (
    <form className={styles.form} onSubmit={manejarSubmit}>
      <label htmlFor="nombre">Nombre: </label>
      <input
        type="text"
        id="nombre"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button type="submit">ENVIAR</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {exito && <p style={{ color: 'green' }}>{exito}</p>}
    </form>
  );
}


