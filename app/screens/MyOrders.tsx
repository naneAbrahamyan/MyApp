import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
const MyOrders = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>My Orders Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyOrders;
