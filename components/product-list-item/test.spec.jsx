import { render, screen } from '@testing-library/react';
import ProductListItem from './product-list-item';
import '@testing-library/jest-dom';
import data from '../../mockData/data.json';


describe('ProductListItem', () => {

	it('renders the components', () => {

		const firstItem = data.products[0];

		render(
			<ProductListItem
				id={firstItem.productId}
				image={firstItem.image}
				title={firstItem.title}
				price={firstItem.price.now}
			/>
		);

		const title = screen.getByText(firstItem.title);
		expect(title).toBeInTheDocument();

		const price = screen.getByText(firstItem.price.now);
		expect(price).toBeInTheDocument();

		const link = screen.getByRole('link');
		expect(link.href.includes(`/product-detail/${firstItem.productId}`)).toBe(true);

		const images = screen.getByRole('img');
		expect(images).toBeInTheDocument();
	});
});
