import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useContext, useState, useCallback} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {UserType} from '../context/useContext';

const AddAddressScreen = () => {
  const navigation = useNavigation();
  const [addresses, setAddresses] = useState([
    {
      name: 'yuvaraj',
      mobileNo: '7349100492',
      houseNo: '43',
      street: 'vijaynagar',
      landmark: 'bangalore',
      postalCode: '541111',
      _id: '65055bdcc717b143aa151162',
    },
    {
      name: 'tfubtyfiunyidf',
      mobileNo: '789787971',
      houseNo: '99',
      street: 'bjhjkdhkjhkf ejwk',
      landmark: 'bangalore',
      postalCode: '540011',
      _id: '65055bdcc717b143aa15115',
    },
  ]);
  console.log(addresses);
  const {userId, setUserId} = useContext(UserType);
  console.log('userId', userId);

  //   console.log(addresses[1].name)
  //   useEffect(() => {
  //     fetchAddresses();
  //   }, []);
  //   const fetchAddresses = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:8000/addresses/${userId}`,
  //       );
  //       const {addresses} = response.data;

  //       setAddresses(addresses);
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   };
  //refresh the addresses when the component comes to the focus ie basically when we navigate back
  // useFocusEffect(
  //   useCallback(() => {
  //     fetchAddresses();
  //   }, [])
  // );
  // console.log("addresses", addresses);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 50}}>
      <View
        style={{
          backgroundColor: '#00CED1',
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: 'white',
            borderRadius: 3,
            height: 38,
            flex: 1,
          }}>
          <AntDesign
            style={{paddingLeft: 10}}
            name="search1"
            size={22}
            color="black"
          />
          <TextInput placeholder="Search Amazon.in" />
        </Pressable>

        <Feather name="mic" size={24} color="black" />
      </View>

      <View style={{padding: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Your Addresses</Text>

        <Pressable
          onPress={() => navigation.navigate('Add')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
            borderColor: '#D0D0D0',
            borderWidth: 1,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            paddingVertical: 7,
            paddingHorizontal: 5,
          }}>
          <Text>Add a new Address</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </Pressable>

        <View>
          <Text>jhjgfg</Text>
          {addresses.map(data => (
            <View style={{flex:1}} key={data._id}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: '#D0D0D',
                  padding: 10,
                  flexDirection: 'column',
                  gap: 5,
                  marginVertical: 10,
                }}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    {data?.name}
                  </Text>
                  <MaterialIcons name="location-pin" size={24} color="red" />
                </View>

                <Text style={{fontSize: 15, color: '#181818'}}>
                  {data?.houseNo}, {data?.landmark}
                </Text>

                <Text style={{fontSize: 15, color: '#181818'}}>
                  {data?.street}
                </Text>

                <Text style={{fontSize: 15, color: '#181818'}}>
                  India, Bangalore
                </Text>

                <Text style={{fontSize: 15, color: '#181818'}}>
                  phone No : {data?.mobileNo}
                </Text>
                <Text style={{fontSize: 15, color: '#181818'}}>
                  pin code : {data?.postalCode}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    marginTop: 7,
                  }}>
                  <Pressable
                    style={{
                      backgroundColor: '#F5F5F5',
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 5,
                      borderWidth: 0.9,
                      borderColor: '#D0D0D0',
                    }}>
                    <Text>Edit</Text>
                  </Pressable>

                  <Pressable
                    style={{
                      backgroundColor: '#F5F5F5',
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 5,
                      borderWidth: 0.9,
                      borderColor: '#D0D0D0',
                    }}>
                    <Text>Remove</Text>
                  </Pressable>

                  <Pressable
                    style={{
                      backgroundColor: '#F5F5F5',
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 5,
                      borderWidth: 0.9,
                      borderColor: '#D0D0D0',
                    }}>
                    <Text>Set as Default</Text>
                  </Pressable>
                </View>
              </TouchableOpacity>
              {/* <Text style={{fontSize: 15, color: '#181818'}}>
                {data?.houseNo}, {data?.landmark}
              </Text>

              <Text style={{fontSize: 15, color: '#181818'}}>{data?.street}</Text>

              <Text style={{fontSize: 15, color: '#181818'}}>
                India, Bangalore
              </Text>

              <Text style={{fontSize: 15, color: '#181818'}}>
                phone No : {data?.mobileNo}
              </Text>
              <Text style={{fontSize: 15, color: '#181818'}}>
                pin code : {data?.postalCode}
              </Text> */}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({});
