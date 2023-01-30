import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Favorite, Home} from '../screens/Screens';
import CustomTabBar from '../components/CustomTabBar';

export type BottomTabParamList = {
  Favorites: undefined;
  Home: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        borderTopWidth: 0,
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        height: 55,
        paddingBottom: 5,
      },
    }}
    tabBar={() => <CustomTabBar />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorites" component={Favorite} />
  </Tab.Navigator>
);

export default TabNavigation;
