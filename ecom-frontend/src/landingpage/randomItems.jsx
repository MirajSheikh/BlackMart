import styles from "./slider.module.css"
import Slider from "react-slick";

const RandomItems = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3
  }

  const items = [
    {id: 1, image: "prod9.webp"},
    {id: 2, image: "prod4.webp"},
    {id: 3, image: "prod53.webp"},
    {id: 4, image: "prod54.webp"},
    {id: 5, image: "prod65.webp"},
    {id: 6, image: "prod11.webp"},
    {id: 7, image: "prod12.webp"},
    {id: 8, image: "prod21.webp"},
    {id: 9, image: "prod20.webp"},
    {id: 10, image: "prod55.webp"},
    {id: 11, image: "prod17.webp"},
    {id: 12, image: "prod59.webp"},
    {id: 13, image: "prod64.webp"},
    {id: 14, image: "prod66.webp"},
    {id: 15, image: "prod6.webp"},
  ]

  return(

    <div className={styles.randomItemsSlider}>

      <Slider {...settings}>
        {items.map(item => (
          <div id={item.id} className={styles.items}>
            <img src={item.image} alt={`image${item.id}`} />
          </div>
        ))}
      </Slider>

    </div>

  );
  
}

export default RandomItems
