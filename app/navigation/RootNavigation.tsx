import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
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
  console.log(hasViewed, 'hasViewed');
  const isLoggedIn = useSelector(
    (value: RootState) => value.authSlice.isLoggedin,
  );
  console.log(isLoggedIn, 'isLoggedIn');

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Stack.Navigator initialRouteName={hasViewed ? 'Login' : 'WalkThrough'}>
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
