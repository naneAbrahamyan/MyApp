import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MyOrders, MyReturns} from '../screens/Screens';
import TabNavigation from './TabNavigation';
import CustomDraw from '../components/CustomDraw';
import colors from '../configs/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type DrawParamList = {
  NotHome: undefined;
  MyOrders: undefined;
  MyReturns: undefined;
};

const Drawer = createDrawerNavigator<DrawParamList>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerLabelStyle: {
          fontSize: 15,
          color: colors.black,
          fontFamily: 'Poppins',
        },
        drawerStyle: {
          width: '80%',
          backgroundColor: 'transparent',
          height: 700,
        },
        drawerActiveBackgroundColor: colors.secondary,
      }}
      drawerContent={props => <CustomDraw {...props} />}>
      <Drawer.Screen
        name="NotHome"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MyReturns"
        component={MyReturns}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MyOrders"
        component={MyOrders}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
