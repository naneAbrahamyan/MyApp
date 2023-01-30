import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
const FavoritesScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Favorites Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FavoritesScreen;
