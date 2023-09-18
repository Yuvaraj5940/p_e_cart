import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import axiosInstance from '../axios';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  console.log(name, email, password);

  const handleRegister = async () => {
    let user = {
      name: name,
      email: email,
      password: password,
    };
    console.log(user);
    // try {
    //   const res = await axiosInstance.post('/register', user);
    //   setName('');
    //   setEmail('');
    //   setPassword('');
    //   console.log(res);
    // } catch (error) {
    //   console.log('registration failed', error);
    // }

    // send a POST  request to the backend API to register the user

    axios
      .post('https://localhost:8000/register', user)
      .then(response => {
        console.log(response);
        Alert.alert(
          'Registration successful',
          'You have been registered Successfully',
        );
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        Alert.alert(
          'Registration Error',
          'An error occurred while registering',
        );
        console.log('registration failed', error);
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
        <Text style={styles.text1}>Register to your Account</Text>
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
            <MaterialIcons
              name="person"
              size={27}
              color="#123"
              style={{marginLeft: 8}}
            />
            <TextInput
              value={name}
              onChangeText={text => setName(text)}
              style={{
                color: 'gray',
                marginVertical: 10,
                width: 300,
                fontSize: name ? 16 : 16,
              }}
              placeholder="enter your Name"
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
          onPress={() => handleRegister()}
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
            Register
          </Text>
        </Pressable>

        <Pressable onPress={() => navigation.goBack()} style={{marginTop: 15}}>
          <Text style={{textAlign: 'center', color: 'gray', fontSize: 16}}>
            Already have a account ? Sign in
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;
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
