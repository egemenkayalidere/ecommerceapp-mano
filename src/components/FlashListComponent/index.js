import React from 'react';
import {FlashList} from '@shopify/flash-list';
import useDataHook from '../../hooks/useDataHook';
import ItemComponent from '../ItemComponent';
import LoadingSpinner from '../LoadingSpinner';

const FlashListComponent = () => {
  const {isFetching, products} = useDataHook();

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <FlashList
        data={products?.slice(0, 100)}
        renderItem={({item}) => <ItemComponent item={item} />}
        estimatedItemSize={200}
      />
    </>
  );
};

export default FlashListComponent;
