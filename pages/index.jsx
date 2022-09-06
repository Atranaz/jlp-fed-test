import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.scss";
import ProductListItem from "../components/product-list-item/product-list-item";
import {PRODUCT_LIST,HEADERS} from "../components/APIs/liveAPI";

// export async function getServerSideProps() {
//   const response = await fetch(
//     "https://phpstack-828706-2850305.cloudwaysapps.com/data.json"
//   );
//   const data = await response.json();
//   return {
//     props: {
//       data: data,
//     },
//   };
// }
export async function getServerSideProps() {
  try {
    const response = await fetch(PRODUCT_LIST,HEADERS);
    const data = await response.json();
    return {
      props: {
        data: data,
        error: false,
      },
    };
  } catch (e) {
    return {
      props: {
        data: false,
        error: true,
      },
    };
  }
}


const Home = ({ data, error }) => {
  
  return (
    <div>
      <Head>
        <title>JL &amp; Partners | Home</title>
        <meta name="keywords" content="shopping" />
      </Head>
      <div>
        {error && (<p>HANG ON! smothing wrong :/ please try again</p>)}
        {!error && data.products.length > 0 && (<>
          <h1 className={styles.categoryheader}>Dishwashers ({data.products.length})</h1>
        <div className={styles.content}>
          {data.products.map((item) => (
            <ProductListItem
            
            key={item.productId}
            id={item.productId}
            image={item.image}
            title={item.title}
            price={item.variantPriceRange.display.max}
          />

          ))}
        </div>
        </>)}

        {!error && data.products.length === 0 && (
            <h1>No results</h1>
          )}

       
      </div>
    </div>
  );
};

export default Home;
