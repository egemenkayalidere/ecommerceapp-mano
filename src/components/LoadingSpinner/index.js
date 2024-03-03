import React from 'react';
import {ActivityIndicator} from 'react-native';
import {StyledLoadingSpinner} from './styles';
import {theme} from '../../theme';

export default function LoadingSpinner() {
  return (
    <StyledLoadingSpinner>
      <ActivityIndicator color={theme.colors.primary} />
    </StyledLoadingSpinner>
  );
}
