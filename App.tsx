/* eslint-disable prettier/prettier */
import React from 'react';

import WalkThroughScreen from './app/screens/WalkThroughScreen';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginScreen from './app/screens/LoginScreen';
import { Provider } from 'react-redux';
import { store , persistor} from './app/redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { RootState } from './app/redux/reducers';
import { View, Text } from 'react-native';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  // const isLoggedin = useSelector((value:RootState) => value.authSlice.isLoggedin);
  const { getItem, setItem } = useAsyncStorage('@myKey');


  useEffect(()=>{
  const checkIfLoggedIn = async () => {
     await setItem('boxk');
     const value = await getItem();
     setLoggedIn(value ? true : false);
  };
  checkIfLoggedIn();
  }, []);
  return (
    <>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading = {null}>
        {!isLoggedIn ?
        <Text>
          You're Logged in
        </Text>
        :
         <LoginScreen />
        }
        </PersistGate>
    </Provider>   
    </>
  );
};

export default App;
