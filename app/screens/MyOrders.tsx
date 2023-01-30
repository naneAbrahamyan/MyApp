import React from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';

import {Text, TouchableOpacity, View} from 'react-native';
import {DrawParamList} from '../navigation/DrawerNavigation';
type MyOrdersProps = DrawerScreenProps<DrawParamList, 'MyOrders'>;

const MyOrders = ({navigation}: MyOrdersProps) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>My Orders Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyOrders;
