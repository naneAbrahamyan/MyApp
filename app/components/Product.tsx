import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
  Pressable,
} from 'react-native';

import appStyles from '../configs/appStyles';
export interface ProductsProp {
  product: {
    title: string;
    description: string;
    price: number;
    thumbnail: string;
  };
}
const Product = ({product}: ProductsProp) => {
  return (
    <TouchableOpacity>
      <View style={styles.cardContainer}>
        <ImageBackground
          source={{uri: product.thumbnail}}
          style={styles.cardImage}
          imageStyle={styles.radius}>
          <TouchableOpacity style={styles.likeButton}>
            <Image source={require('../assets/Favorite.png')} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.height}>
          <Text style={styles.textALign}> {product.title} </Text>
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <Text style={appStyles.h6}>${product.price} </Text>
          </View>
          <View>
            <FlatList
              horizontal
              data={colorsData}
              keyExtractor={item => item}
              renderItem={item => {
                return (
                  <>
                    <Pressable onPress={() => console.log('pressed')}>
                      <View
                        style={[
                          styles.colorItems,
                          {backgroundColor: item.item},
                        ]}
                      />
                    </Pressable>
                  </>
                );
              }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 170,
    // height: '400',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorItems: {
    width: 12,
    height: 12,
    margin: 3,
    borderRadius: 20,
  },
  likeButton: {
    marginLeft: 120,
    marginTop: -10,
  },
  textALign: {
    textAlign: 'center',
  },
  radius: {
    borderRadius: 10,
  },
  height: {
    height: 50,
  },
});

const colorsData = ['#FFCD90', '#FF4F4F', '#313131', 'beige'];

export default Product;
