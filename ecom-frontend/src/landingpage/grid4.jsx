import styles from "./landingpage.module.css"

const Grid4 = ( { title, image1, image2, image3, image4, desc1, desc2, desc3, desc4 } ) => {

  return(

    <div className={styles.titleAndGrid}>

      <h2 className={styles.gridTitle}>{title}</h2>
      <div className={styles.grid4}>
        <div className={styles.block}>
          <img src={image1} alt={`${title} product 1`} />
          <h4>{desc1}</h4>
        </div>
        <div className={styles.block}>
          <img src={image2} alt={`${title} product 2`} />
          <h4>{desc2}</h4>
        </div>
        <div className={styles.block}>
          <img src={image3} alt={`${title} product 3`} />
          <h4>{desc3}</h4>
        </div>
        <div className={styles.block}>
          <img src={image4} alt={`${title} product 4`} />
          <h4>{desc4}</h4>
        </div>


      </div>

    </div>

  );

}

export default Grid4
