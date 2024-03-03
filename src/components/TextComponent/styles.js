import styled from 'styled-components/native';

export const StyledTextComponent = styled.Text`
  font-size: ${({fontSize}) => fontSize ?? '12px'};
  color: ${({color}) => color ?? '#000'};
  font-weight: ${({bold}) => (bold ? 'bold' : 'normal')};
`;
