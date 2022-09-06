import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import data from '../../mockData/data2.json';
import ProductDetail, { getServerSideProps } from "./[id]";

describe('Product Details', () => {

	// reset 
    beforeEach(() => {
		fetch.resetMocks();
	});

	// response sucess getting all products
    it('should load the item', async () => {
		fetch.mockResponseOnce(JSON.stringify(data));
		const response = await getServerSideProps({params: {id: 1}});
		expect(response).toEqual({
			props: {
				error: false,
				data: data
			}
		});
	});

	// on error 
    it('when it errors we should show a message', async () => {
		const response = await getServerSideProps({params: {id: 1}});
		expect(response).toEqual({
			props: {
				error: true,
			}
		});

		render(<ProductDetail error />);
		const errorMessage = screen.getByText("HANG ON, We can’t find the item you’re looking for. Please try again.");
		expect(errorMessage).toBeInTheDocument();
	});
	
});
