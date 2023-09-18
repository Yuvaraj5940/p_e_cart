import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import Home from '../screens/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Cartscreen from '../screens/cartscreen';
import Profile from '../screens/profile';
import Productinfo from '../screens/productinfo';
import AddressScreen from '../screens/adressScreen';
import AddAddressScreen from '../screens/addAdress';
import ConfirmationScreen from '../screens/confirmationScreen';
import OrderScreen from '../screens/orderScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const Stacknav = () => {
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: {color: '#008E97'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons
                  name="home"
                  size={27}
                  color="#008E97"
                  style={{marginLeft: 8}}
                />
              ) : (
                <Ionicons
                  name="home"
                  size={27}
                  color="#123"
                  style={{marginLeft: 8}}
                />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarLabelStyle: {color: '#008E97'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons
                  name="person"
                  size={27}
                  color="#008E97"
                  style={{marginLeft: 8}}
                />
              ) : (
                <Ionicons
                  name="person"
                  size={27}
                  color="#123"
                  style={{marginLeft: 8}}
                />
              ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={Cartscreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarLabelStyle: {color: '#008E97'},
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons
                  name="cart-outline"
                  size={27}
                  color="#008E97"
                  style={{marginLeft: 8}}
                />
              ) : (
                <Ionicons
                  name="cart-outline"
                  size={27}
                  color="#123"
                  style={{marginLeft: 8}}
                />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="pinfo"
          component={Productinfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Address"
          component={AddAddressScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Add"
          component={AddressScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Confirm"
          component={ConfirmationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacknav;
