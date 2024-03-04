/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Modal, SafeAreaView, Pressable} from 'react-native';
import useImageModalStore from '../../state/useImageModalStore';
import TextComponent from '../TextComponent';
import {ImageZoom} from '@likashefqet/react-native-image-zoom';
import {
  StyledImageModalContainer,
  StyledCloseTextContainer,
  StyledImageContainer,
} from './styles';

export default function ImageModal() {
  const {modalImage, setModalImage} = useImageModalStore();

  return (
    <SafeAreaView>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalImage != null ? true : false}>
        <StyledImageModalContainer>
          <StyledCloseTextContainer>
            <Pressable onPress={() => setModalImage(null)}>
              <TextComponent text={'Close'} color={'#fff'} fontSize={'16px'} />
            </Pressable>
          </StyledCloseTextContainer>
          <StyledImageContainer>
            <ImageZoom
              uri={modalImage}
              minScale={0.5}
              maxScale={5}
              resizeMode="contain"
            />
          </StyledImageContainer>
        </StyledImageModalContainer>
      </Modal>
    </SafeAreaView>
  );
}
