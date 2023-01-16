import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState, useEffect} from 'react';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

import LoginScreen from '../screens/LoginScreen';
import WalkThroughScreen from '../screens/WalkThroughScreen';
export type RootParamList = {
  Login: undefined;
  WalkThrough: undefined;
};

const Stack = createNativeStackNavigator<RootParamList>();

const RootNavigator = () => {
  const [hasViewed, setHasViewed] = useState('false');
  console.log(hasViewed, 'hasViewed');
  const {getItem} = useAsyncStorage('isLoggedIn');
  useEffect(() => {
    const getFromStoragre = async () => {
      const val = await getItem();
      if (val) {
        setHasViewed(val);
      }
    };
    getFromStoragre();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {hasViewed !== 'true' ? (
          <>
            <Stack.Screen
              name="WalkThrough"
              component={WalkThroughScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
            //   options={{
            //     headerShown: false,
            //   }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            //   options={{
            //     headerShown: false,
            //   }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
