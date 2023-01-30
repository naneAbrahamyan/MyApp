import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
const NewsLetter = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => console.log('clicked')}>
        <Text> NewsLetter Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewsLetter;
