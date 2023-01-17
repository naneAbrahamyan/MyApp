import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState, useEffect} from 'react';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

import LoginScreen from '../screens/LoginScreen';
import WalkThroughScreen from '../screens/WalkThroughScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
export type RootParamList = {
  Login: undefined;
  WalkThrough: undefined;
};

const Stack = createNativeStackNavigator<RootParamList>();

const RootNavigator = () => {
  const hasViewed = useSelector(
    (value: RootState) => value.infoSlice.hasViewed,
  );
  const [viewed, setHasViewed] = useState('false');
  console.log(viewed, 'hasViewed');
  const {getItem} = useAsyncStorage('isLoggedIn');
  useEffect(() => {
    const getFromStoragre = async () => {
      const val = await getItem();
      if (val) {
        setHasViewed(val);
      }
    };
    getFromStoragre();
  }, [hasViewed, getItem]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {viewed !== 'true' ? (
          <>
            <Stack.Screen
              name="WalkThrough"
              component={WalkThroughScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
