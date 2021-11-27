
import styles from './App.module.css';
import { Alumno } from './components/Alumno';

function App() {
  return (
    <div className={styles.App}>
      <h1>listado de alumnos</h1>
      
      <div>
      <table className= {styles.table }>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Nota</th>
          <th>Color</th>
        </tr>

        <Alumno nombre="Alvaro" apellido="Garcia" nota="90" color="yellow"/>
        <Alumno nombre="Pedro" apellido="Marroquin" nota="91" color ="coral"/>
        <Alumno nombre="Pablo" apellido="Tanchez" nota="92" color ="khaki"/>
      </table>
      </div>

    </div>
  );
}

export default App;
