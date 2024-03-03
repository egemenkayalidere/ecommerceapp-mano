import {useEffect, useState} from 'react';
import {BASE_URL, HEADERS} from '../utils/constants';

const useDataHook = () => {
  const [isFetching, setFetching] = useState(true);
  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);

  const fetchProducts = async () => {
    const api = '/users/products';

    const response = await fetch(`${BASE_URL}/${api}`, {
      method: 'POST',
      headers: HEADERS,
    });

    const {data} = await response.json();
    if (data) {
      setFetching(false);
      setProducts(data.items);
    }
  };

  const fetchProductDetails = async id => {
    try {
      setFetching(true);
      const api = `/users/products/${id}`;

      const response = await fetch(`${BASE_URL}/${api}`, {
        method: 'GET',
        headers: HEADERS,
      });

      const {data} = await response.json();
      if (data) {
        setFetching(false);
        setProduct(data);
      }
    } catch (error) {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {fetchProducts, fetchProductDetails, products, product, isFetching};
};

export default useDataHook;
