/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Image, ImageSourcePropType} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

import {Dimensions} from 'react-native';
import {RootParamList} from '../navigation/RootNavigation';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducers';
import {useDispatch} from 'react-redux';
import {setHasViewed} from '../redux/infoSlice';

const height = Dimensions.get('window').height;

type WalkThroughScreenProps = NativeStackScreenProps<
  RootParamList,
  'WalkThrough'
>;
const WalkThroughScreen = ({navigation}: WalkThroughScreenProps) => {
  const {setItem} = useAsyncStorage('isLoggedIn');

  const hasViewed = useSelector(
    (value: RootState) => value.infoSlice.hasViewed,
  );
  const dispatch = useDispatch();

  const onDone = async () => {
    navigation.navigate('Login');
    dispatch(setHasViewed(true));
    await setItem(hasViewed + '');
  };
  const onSkip = async () => {
    navigation.navigate('Login');
    dispatch(setHasViewed(true));
    await setItem(hasViewed + '');
  };
  const renderItem = ({item}: slidesType) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingBottom: 100,
        }}>
        <Image source={item.image} style={styles.imgStyle} />
        <LinearGradient
          colors={['transparent', 'rgba(255,255,255, 0.9)']}
          style={{position: 'absolute', width: '100%', height: '90%'}}
        />
        <View
          style={{
            position: 'absolute',
            flex: 1,
            marginTop: 20,
            justifyContent: 'space-between',
            height: 580,
          }}>
          <Image source={require('../assets/logo.png')} />
          <View style={{marginHorizontal: 25}}>
            <Text style={styles.headerText}>
              {item.title.split(' ').map(value => (
                <Text
                  style={{
                    color: value === value.toUpperCase() ? '#FF4F00' : 'black',
                  }}>
                  {value}{' '}
                </Text>
              ))}
            </Text>
            <Text>Random text</Text>
          </View>
        </View>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View
        style={{alignItems: 'center', justifyContent: 'center', margin: 10}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'orange',
            borderRadius: 20,
            height: 40,
            width: 200,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
            {' '}
            Next{' '}
          </Text>
        </View>
      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            height: 40,
            width: 200,
          }}>
          <Text style={{color: 'orange', fontWeight: 'bold', fontSize: 15}}>
            {' '}
            Skip{' '}
          </Text>
        </View>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'orange',
            borderRadius: 20,
            width: 350,
            height: 60,
          }}>
          <Text style={{color: 'white'}}> Get Started </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        onSkip={onSkip}
        showSkipButton={true}
        activeDotStyle={{
          backgroundColor: 'orange',
        }}
        dotStyle={{
          backgroundColor: '#FFCD90',
        }}
        bottomButton
        renderNextButton={_renderNextButton}
        renderSkipButton={_renderSkipButton}
        renderDoneButton={_renderDoneButton}
      />
    </>
  );
};

export default WalkThroughScreen;
type slidesType = {
  item: {
    key: string;
    title: string;
    text: string;
    image: ImageSourcePropType;
  };
};
const styles = StyleSheet.create({
  imgStyle: {
    height: (3.8 * height) / 5,
    objectFit: 'fit',
  },
  logo: {
    marginTop: 10,
    marginLeft: 10,
    height: 120,
    widht: 120,
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
});

const slides = [
  {
    key: 's1',
    title: 'Contains Variety of CHOICES',
    text: 'Confused about your outfit? Dont worry! Find the best here',
    image: require('../assets/background.png'),
  },
  {
    key: 's2',
    title: 'Update the latest TRENDS',
    text: 'Confused about your outfit? Dont worry! Find the best here',
    image: require('../assets/background3.png'),
  },
  {
    key: 's3',
    title: 'Many VOUCHERS for newbie',
    text: 'Confused about your outfit? Dont worry! Find the best here',
    image: require('../assets/background2.png'),
  },
];
