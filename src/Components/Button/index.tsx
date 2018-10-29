import * as React from 'react';
import { StyleButton, ButtonLabel, ButtonLoading } from './styled'; 

export interface IButtonProps {
  width?: string,
  height?: string,
  text?: string,
  type?: string,
  disabled?: boolean,
  loading?: boolean,
  onClick?: any,
}

export const Button: React.SFC<IButtonProps> = ({ width, height, text, type, disabled, loading, onClick }) => (
  <StyleButton type={type} 
    data-width={width} 
    data-height={height}
    onClick={onClick}
    disabled={disabled}>
    {text && <ButtonLabel>{text}</ButtonLabel>}
    {loading && <ButtonLoading />}
  </StyleButton>
);