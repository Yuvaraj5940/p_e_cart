import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        // const token = await AsyncStorage.clear()

        if (token) {
          navigation.replace('Main');
        }
      } catch (err) {
        console.log('error message', err);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };
    console.log(user)
    const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTAzZmFiODNjNzA1ZTYyN2E0MDgwZDIiLCJpYXQiOjE2OTQ3NzQyOTV9.FtmpTv_rjK0p7iEtVdWKzpPoPApkUvnWlLKIJSiVIzc'
    AsyncStorage.setItem('authToken', token);
    // const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTBhNzkxMTI3NDMxMjBjZjMwYzIzNjgiLCJpYXQiOjE2OTUxODYyOTN9.8Z4k67oW8PQzFXmshDiwB4OZkoAdeivyo0hi9kpxmNo'
    // AsyncStorage.setItem('authToken', token);

    axios
      .post('http://localhost:8000/login', user)
      .then(response => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem('authToken', token);
        navigation.replace('Home');
      })
      .catch(error => {
        Alert.alert('Login Error', 'Invalid Email', error);
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Image
        style={{width: 150, height: 100}}
        source={{
          uri: 'https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png',
        }}
      />
      <KeyboardAvoidingView>
        <Text style={styles.text1}>Login to your Account</Text>
        <View style={{marginTop: 70}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#D0D0D0',
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}>
            <Icon name="email" size={27} color="#123" style={{marginLeft: 8}} />
            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              style={{
                color: 'gray',
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="enter your Email"
            />
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#D0D0D0',
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}>
            <Icon
              name="form-textbox-password"
              size={27}
              color="#123"
              style={{marginLeft: 8}}
            />
            <TextInput
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              style={{
                color: 'gray',
                marginVertical: 10,
                width: 300,
                fontSize: password ? 16 : 16,
              }}
              placeholder="enter your Password"
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text>Keep me logged in</Text>

          <Text style={{color: '#007FFF', fontWeight: '500'}}>
            Forgot Password
          </Text>
        </View>
        <View style={{marginTop: 80}} />

        <Pressable
          onPress={handleLogin}
          style={{
            width: 200,
            backgroundColor: '#FEBE10',
            borderRadius: 6,
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 15,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('register')}
          style={{marginTop: 15}}>
          <Text style={{textAlign: 'center', color: 'gray', fontSize: 16}}>
            Don't have an account? Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#041E42',
    textAlign: 'center',
  },
});
