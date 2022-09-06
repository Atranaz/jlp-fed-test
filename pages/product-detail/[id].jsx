import ProductCarousel from "../../components/product-carousel/product-carousel";
import styles from "./product-detail.module.scss";
import Link from "next/link";
import { IoChevronBackOutline } from 'react-icons/io5';
import { PRODUCT_DETAILS, HEADERS } from "../../components/APIs/liveAPI";
import React from 'react';


// export async function getServerSideProps(context) {
//   const id = context.params.id;
//   const response = await fetch(
//     "https://phpstack-828706-2850305.cloudwaysapps.com/data2.json"
//   );

//   const data = await response.json();

//             console.log(data.detailsData[0].details.productInformation );

//   return {
//     props: { data },
//   };
// }


export async function getServerSideProps(context) {
  const id = context.params.id;
  try {
    const response = await fetch(PRODUCT_DETAILS(id), HEADERS);
    const data = await response.json();
    return {
      props: { data, error: false },
    };
  } catch (e) {
    return {
      props: {
        error: true,
      },
    };
  }
}
const ProductDetail = ({ data, error }) => {
  if (error) {
    return (<div style={{ padding: "4rem", textAlign: "center" }}>
      <p>HANG ON, We can’t find the item you’re looking for. Please try again.</p>
    </div>);
  }

  const backArrow = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <IoChevronBackOutline size={'30px'} color={"#908d8d"} />
      </a>
    )
  })

  const PriceUnit = (
    <>
      <div className={styles.price}>£{data.price.now}</div>
      <div className={styles.specialOffer}>{data.displaySpecialOffer}</div>
      <div className={styles.includedOptions}>
        {data.additionalServices.includedServices}
      </div>
    </>
  );

  return (
    <div className={styles.itemWrap}>
      <div className={styles.itemTitlewrap}>
        <div className={styles.arrowBack}>
          <Link key={'Home'} href={{ pathname: "/" }}>
          <backArrow />
          </Link>
        </div>
        <div className={styles.itemTitle}>
          <h1>{data.title}</h1>
        </div>
      </div>

      <div className={styles.pageWrap}>

        <div className={styles.itemLeft}>

          <ProductCarousel image={data.media.images.urls} />

          <div className={styles.itemInfo} >



            <div className={styles.itemPrice}>
              {PriceUnit}
            </div>



            <div>
              <h3>Product information</h3>
              <div dangerouslySetInnerHTML={{ __html: data.details.productInformation }} />

            </div>
            <div className={styles.itemSKU}>
              <p>Product code: {data.defaultSku}</p>
            </div>

            <h3>Product specification</h3>
            <ul className={styles.specList}>
              {data.details.features[0].attributes.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <div dangerouslySetInnerHTML={{ __html: item.name }} />

                  <div>{item.value}</div>

                </li>
              ))}
            </ul>

          </div>

        </div>
        <div className={styles.itemRight}>
          {PriceUnit}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
