import React from 'react';

import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import RootNavigator from '../navigation/RootNavigation';
const MainApp = () => {
  const isLoggedin = useSelector(
    (value: RootState) => value.authSlice.isLoggedin,
  );
  console.log(isLoggedin);
  return (
    <>
      <RootNavigator />
    </>
  );
};

export default MainApp;
