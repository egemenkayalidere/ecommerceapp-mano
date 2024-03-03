import React from 'react';
import {StyledTextComponent} from './styles';

export default function TextComponent({color, fontSize, text, bold}) {
  return (
    <StyledTextComponent color={color} fontSize={fontSize} bold={bold}>
      {text}
    </StyledTextComponent>
  );
}
