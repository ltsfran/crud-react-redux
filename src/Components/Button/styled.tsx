import styled from 'styled-components';
import { IButtonProps } from './index';

export const StyleButton = styled.button`
  width: ${ (props: IButtonProps) => props['data-width'] || '100px' };
  height: ${ (props: IButtonProps) => props['data-height'] || '70x' };
  border: none;
  border-radius: 2px;
  background-color: #5cb85c;
  color: white;
`;

export const ButtonLabel = styled.label``;

export const ButtonLoading = styled.label``;