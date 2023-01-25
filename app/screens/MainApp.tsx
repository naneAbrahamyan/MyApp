import React from 'react';

import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import RootNavigator from '../navigation/RootNavigation';
import HomeScreen from './HomeScreen';
const MainApp = () => {
  const isLoggedin = useSelector(
    (value: RootState) => value.authSlice.isLoggedin,
  );
  console.log(isLoggedin);
  return (
    <>
      {/* <ParentComponent /> */}
      {/* <HomeScreen /> */}
      <RootNavigator />
    </>
  );
};

export default MainApp;
