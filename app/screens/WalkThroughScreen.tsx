/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button, Image, ImageBackground} from 'react-native';
import {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';


import { Dimensions } from 'react-native';

const height = Dimensions.get('window').height;
const WalkThroughScreen = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };
  const renderItem = ({item} : Object) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingBottom:100,
        }}
      >
       <Image source = {item.image} style = {styles.imgStyle} />
       <LinearGradient
      colors={['transparent','rgba(255,255,255, 0.9)']}
      style={{position: 'absolute',width: '100%', height: '90%'}}
        />
       <View style={{position:'absolute', flex: 1, marginTop:20, justifyContent:'space-between', height:580}}>
       <Image source = {require('../assets/logo.png')} />
       <View style ={{marginHorizontal: 25}}>
        <Text style = {styles.headerText}>
           {item.title.split(' ').map(value => (<Text style = {{color: value === value.toUpperCase() ? '#FF4F00' : 'black'}}>{value} </Text>))}
          </Text>
          <Text>
            Another day another slay
          </Text>
       </View>
      </View>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style ={{alignItems: 'center', justifyContent: 'center', margin: 10}}>
        <View style ={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange', borderRadius: 20, height:40, width: 200}}>
        <Text style = {{color: "white", fontWeight: "bold", fontSize:15}}> Next </Text>
        </View>
      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View style ={{alignItems: 'center', justifyContent: 'center'}}>

      <View style ={{alignItems: 'center', justifyContent: 'center',borderRadius: 20, height:40, width: 200}}>
       <Text style = {{color: "orange", fontWeight: "bold", fontSize:15}}> Skip </Text>
      </View>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style ={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <View style ={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange', borderRadius: 20, width: 350, height: 60}}>
           <Text style ={{color:'white'}}> Get Started </Text>
        </View>
      </View>
    );
  }

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>

            <Button
              title="Show Intro Slider Again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          renderItem={renderItem}
          data={slides}
          onDone={onDone}
          onSkip={onSkip}
          showSkipButton={true}
          activeDotStyle = {{
            backgroundColor: 'orange',
          }
          }
          dotStyle = {{
            backgroundColor: '#FFCD90',
          }

          }
          bottomButton
          renderNextButton={_renderNextButton}
          renderSkipButton={_renderSkipButton}
          renderDoneButton = {_renderDoneButton}

        />
      )}
    </>
  );
};

export default WalkThroughScreen;

const styles = StyleSheet.create({
  imgStyle: {
    height: 3.8 * height / 5,
    objectFit: 'fit',
  },
  logo: {
    marginTop: 10,
    marginLeft:10,
    height: 120,
    widht:120,
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
    image: require("../assets/background.png"),
  },
  {
    key: 's2',
    title: 'Update the latest TRENDS',
    text: 'Confused about your outfit? Dont worry! Find the best here',
    image: require("../assets/background3.png"),
  },
  {
    key: 's3',
    title: 'Many VOUCHERS for newbie',
    text: 'Confused about your outfit? Dont worry! Find the best here',
    image: require("../assets/background2.png"),
  },

];
