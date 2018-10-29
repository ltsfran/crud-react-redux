import * as React from 'react';

interface ISingleInputProps {
  id?: string,
  value?: string,
  title?: string,
  onChange?: any
}

export const SingleInput: React.SFC<ISingleInputProps> = ({id, value, title, onChange}) => (
    <React.Fragment>
      <label>{title}</label>
      <input id={id} defaultValue={value} onChange={onChange} type="text" />
      <br />
      <br />
    </React.Fragment>
);
