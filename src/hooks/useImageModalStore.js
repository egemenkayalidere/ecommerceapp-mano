/* eslint-disable no-unused-vars */
import {create} from 'zustand';

const useImageModalStore = create(set => ({
  modalImage: null,
  setModalImage: modalImage => {
    set({
      modalImage,
    });
  },
}));

export default useImageModalStore;
