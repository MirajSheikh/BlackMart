import ProductBlock from '../productBlock';
import styles from '../productPage.module.css'

const Pistols = ( {title} ) => {

  return(
    <>
      <h1 className={styles.pageTitle}>{title}</h1>

      <div className={styles.pageContainer}>


        <ProductBlock />
        <ProductBlock />
        <ProductBlock />
        <ProductBlock />
        <ProductBlock />
        <ProductBlock />
        <ProductBlock />
        <ProductBlock />
        <ProductBlock />

      </div>
    </>
  );

}

export default Pistols
