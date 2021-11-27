
import styles from './Alumno.module.css'



export const Alumno = (props) =>{

  const nombre = props.nombre;
  const apellido = props.apellido;
  const nota = props.nota;
  const color = props.color;

  return(
    <tr style={{
        backgroundColor:color
    }}>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{nota}</td>
      <td>{color}</td>
    </tr>    
  );
}

