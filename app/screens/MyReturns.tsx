import React from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';

import {Text, TouchableOpacity, View} from 'react-native';
import {DrawParamList} from '../navigation/DrawerNavigation';
type MyReturnsProps = DrawerScreenProps<DrawParamList, 'MyReturns'>;

const MyReturns = ({navigation}: MyReturnsProps) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>My Returns Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyReturns;
