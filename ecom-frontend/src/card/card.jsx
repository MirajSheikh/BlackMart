import { Link } from "react-router-dom";
import styles from "./card.module.css"

function Card(props){

  return(
    <div className={styles.cardContainer}>
      <img src={props.image}></img>
      <Link to={props.page}>
        <h2 className={styles.title}>{props.title}</h2>
      </Link>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
}

export default Card
