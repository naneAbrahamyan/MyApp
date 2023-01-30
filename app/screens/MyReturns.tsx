import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
const MyReturns = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>My Returns Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyReturns;
