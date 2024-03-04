/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Image} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  StyledDescriptionContainer,
  StyledImageContainer,
  StyledItemComponent,
  StyledPriceContainer,
  StyledTitleContainer,
} from './styles';
import TextComponent from '../TextComponent';
import {theme} from '../../theme';
import useImageModalStore from '../../state/useImageModalStore';

const ItemComponent = ({item}) => {
  const navigation = useNavigation();
  const {setModalImage} = useImageModalStore();
  const route = useRoute();
  return (
    <StyledItemComponent
      onPress={() => {
        route.name === 'HomeScreen'
          ? navigation.navigate('ItemDetailsScreen', {id: item?.id})
          : setModalImage(item?.images[0].original);
      }}>
      <StyledImageContainer>
        <Image
          resizeMode="contain"
          source={{uri: item?.images[0].thumbnail}}
          style={{width: '100%', height: '100%'}}
        />
      </StyledImageContainer>
      <StyledTitleContainer>
        <TextComponent text={item?.title} fontSize={'14px'} bold />
      </StyledTitleContainer>
      <StyledDescriptionContainer>
        <TextComponent text={item?.categories[0].title} fontSize={'13px'} />
      </StyledDescriptionContainer>
      <StyledPriceContainer>
        <TextComponent
          text={`${item?.price} TL`}
          color={theme.colors.primary}
          fontSize={'12px'}
          bold
        />
      </StyledPriceContainer>
    </StyledItemComponent>
  );
};

export default ItemComponent;
