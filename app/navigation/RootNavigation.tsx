import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState, useEffect} from 'react';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {Login, WalkThrough} from '../screens/Screens';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import DrawerNavigation from './DrawerNavigation';
export type RootParamList = {
  Login: undefined;
  WalkThrough: undefined;
  DrawerNavigation: undefined;
};

const Stack = createNativeStackNavigator<RootParamList>();

const RootNavigator = () => {
  const hasViewed = useSelector(
    (value: RootState) => value.infoSlice.hasViewed,
  );
  const isLoggedIn = useSelector(
    (value: RootState) => value.authSlice.isLoggedin,
  );
  console.log(isLoggedIn, 'isLoggedIn');

  const [viewed, setHasViewed] = useState('false');
  const {getItem} = useAsyncStorage('isLoggedIn');
  useEffect(() => {
    const getFromStoragre = async () => {
      const val = await getItem();
      if (val) {
        console.log('value', val === 'true');
        setHasViewed(val);
      }
    };
    getFromStoragre();
  }, [hasViewed, getItem]);
  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Stack.Navigator
          initialRouteName={viewed === 'true' ? 'WalkThrough' : 'Login'}>
          <>
            <Stack.Screen
              name="WalkThrough"
              component={WalkThrough}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
          </>
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="DrawerNavigation"
            component={DrawerNavigation}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
