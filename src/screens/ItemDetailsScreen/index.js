import React, {useEffect} from 'react';
import useDataHook from '../../hooks/useDataHook';
import ItemComponent from '../../components/ItemComponent';
import LoadingSpinner from '../../components/LoadingSpinner';
import ImageModal from '../../components/ImageModal';

export default function ItemDetailsScreen({route}) {
  const {id} = route.params;
  const {isFetching, product, fetchProductDetails} = useDataHook();

  useEffect(() => {
    fetchProductDetails(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <ItemComponent item={product} />
      <ImageModal />
    </>
  );
}
