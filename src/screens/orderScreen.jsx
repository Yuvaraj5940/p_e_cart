import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';

const OrderScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 1300);
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <LottieView
        source={require('../assects/thumbs.json')}
        // ref={animation}
        style={{
          height: 260,
          width: 300,
          alignSelf: 'center',
          marginTop: 40,
          justifyContent: 'center',
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
      <Text
        style={{
          marginTop: 20,
          fontSize: 19,
          fontWeight: '600',
          textAlign: 'center',
        }}>
        Your Order Has been Recieved
      </Text>
      <LottieView
        source={require('../assects/sparkle.json')}
        style={{
          height: 300,
          position: 'absolute',
          top: 100,
          width: 300,
          alignSelf: 'center',
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 30,
  },
});
