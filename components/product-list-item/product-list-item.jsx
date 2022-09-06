import Link from "next/link";
import styles from "./product-list-item.module.scss";

const ProductListItem = ({ key, id, image, title, price }) => {
	return (
		<Link
			key={id}
			href={{
				pathname: "/product-detail/[id]",
				query: { id: id },
			}}
		>
			<a key="{id}" className={styles.link}>
				<div className={styles.content}>
					<div>
						<img src={image} alt="" style={{ width: "100%" }} />
					</div>
					<div>{title}</div>
					<div className={styles.price}>{price}</div>
				</div>
			</a>
		</Link>
	);

    }
export default ProductListItem;
