import styles from "./product-carousel.module.scss";

const ProductCarousel = ({ image }) => {
  return (
    <div className={styles.productCarousel} >
      <img src={image} alt="" style={{ width: "100%", maxWidth: "500px" }} />
    </div>
  );
};

export default ProductCarousel;
