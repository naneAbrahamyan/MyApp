import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import colors from '../configs/colors';
import {useNavigation} from '@react-navigation/native';

const CustomTabBar = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const navigation = useNavigation();

  return (
    <View style={styles.topConatiner}>
      <View>
        <ImageBackground
          source={require('../assets/base.png')}
          style={styles.bgImage}>
          <View style={styles.container}>
            <TouchableOpacity
              style={[styles.tab]}
              onPress={() => {
                setActiveTab('tab1');
                navigation.navigate('Home' as never);
              }}>
              <View>
                <Image source={require('../assets/Home.png')} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'tab2' && styles.activeTab]}
              onPress={() => {
                setActiveTab('tab2');
                navigation.navigate('Favorites' as never);
              }}>
              <Image source={require('../assets/Favorite1.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'tab3' && styles.activeTab]}
              onPress={() => setActiveTab('tab3')}>
              <Image source={require('../assets/Categories.png')} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <TouchableOpacity
          style={styles.cart}
          onPress={() => {
            navigation.navigate('Home' as never);
          }}>
          <View style={styles.circleNumber}>
            <Text style={styles.numberText}> 50 </Text>
          </View>
          <Image source={require('../assets/Bag.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topConatiner: {
    position: 'absolute',
    left: 20,
    right: 0,
    bottom: 0,
    height: 90,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  tab: {
    flex: 1,
    marginTop: 20,
  },
  activeTab: {
    // backgroundColor: '#ddd',
  },
  bgImage: {
    height: 100,
  },
  cart: {
    position: 'absolute',
    top: 3,
    right: 22,
    width: 45,
    height: 50,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleNumber: {
    position: 'absolute',
    backgroundColor: colors.primary,
    height: 25,
    width: 25,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 15,
    top: -10,
    right: -5,
  },
  numberText: {
    color: colors.white,
    textAlign: 'center',
    marginTop: -1,
  },
});

export default CustomTabBar;
