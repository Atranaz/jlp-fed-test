import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import productData from '../mockData/data.json';
import Home, { getServerSideProps } from "./index";



describe('Product Grid', () => {

    //reset the mock
    beforeEach(() => {
        fetch.resetMocks();
    });

    // error on api 
    it('getting error on api return response', async () => {
        const response = await getServerSideProps();
        expect(response).toEqual({
            props: {
                error: true,
                data: false
            }
        });

        render(<Home error />);
        const errorMessage = screen.getByText('HANG ON! smothing wrong :/ please try again');
        expect(errorMessage).toBeInTheDocument();
    });

    // get the items result
    it('should load all the products', async () => {
        
        fetch.mockResponseOnce(JSON.stringify(productData));
        const response = await getServerSideProps();
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(response).toEqual({
            props: {
                error: false,
                data: productData
            }
        });
    });
   

    it('getting response but 0 result', async () => {
        render(<Home data={{ products: [] }} />);
        const errorMessage = screen.getByText('No results');
        expect(errorMessage).toBeInTheDocument();
    })



});