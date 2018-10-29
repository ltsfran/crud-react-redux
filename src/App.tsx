import * as React from 'react';
import { UserContainer } from './Containers/UserContainer/index';
import { SingleInput } from './Components/SingleInput';
import { Button } from './Components/Button/index';

export const App = () => (<React.Fragment>
      <UserContainer />
      <SingleInput />
      <Button type='button' text='Submit' width={'100px'}/>
  </React.Fragment>);

