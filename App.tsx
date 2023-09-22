// import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Stacknav from './src/navigation/stacknav';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {ModalPortal} from 'react-native-modals';
import {UserContext} from './src/context/useContext';

const App = () => {
  return (
    <Provider store={store}>
      <UserContext>
        <Stacknav />
        <ModalPortal />
      </UserContext>
    </Provider>
  );
};

export default App;
