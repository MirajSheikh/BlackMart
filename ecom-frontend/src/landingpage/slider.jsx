import Slider from "react-slick";
import styles from "./slider.module.css"

const Carousel = () => {

  const offers = [
    {id: 1, offerName: "Cyber Tuesday!!", discount: "35% Off on Electronics", image: "cyberTuesday.png"},
    {id: 2, offerName: "Fantastic Fridays!!", discount: "20% Off on all T-Shirts", image: "fantasticFridays.png"},
    {id: 3, offerName: "Mega May Sale!!", discount: "Upto 50% Off", image: "megaMaySale.png"},
    {id: 4, offerName: "Hack the Holidays!!", discount: "30% Off on all Items", image: "catInChair.png"},
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true
  }

  return(

    <div>
      <Slider {...settings}>
        {offers.map(offer => (
          <div id={offer.id} className={styles.panel}>
            <img src={offer.image} alt={offer.offerName} className={styles.image} />
            <p className={styles.offerName}>{offer.offerName}</p>
            <p className={styles.discount}>{offer.discount}</p>
          </div>
        ))}
      </Slider>
    </div>

  );

}

export default Carousel
