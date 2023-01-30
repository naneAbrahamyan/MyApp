import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {BottomTabParamList} from '../navigation/TabNavigation';

type CartScreenProps = DrawerScreenProps<BottomTabParamList, 'Cart'>;

const MyCart = ({navigation}: CartScreenProps) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>My Cart Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyCart;
