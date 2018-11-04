import React from 'react';
import { StyleSheet, Text, TextInput, View, Alert, Linking, Dimensions, LayoutAnimation, StatusBar, TouchableOpacity } from 'react-native';
// Components: https://react-native-training.github.io/react-native-elements/
// Icons: https://material.io/tools/icons/
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Button, ButtonGroup, Icon, Header, List, ListItem, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
// Tab Navigation: https://reactnavigation.org/docs/en/tab-based-navigation.html
import { createBottomTabNavigator } from 'react-navigation';
import QRCode from 'react-native-qrcode';
import { BarCodeScanner, Permissions } from 'expo';
import { Provider, connect } from 'react-redux';

import Store from './redux/store';

// Import my pages
import Profile from './tabs/Profile';
import Connec from './tabs/Connec';
import Camera from './tabs/Camera';
import Contacts from './tabs/Contacts';


// Bottom Tab Menu
const Navigator = createBottomTabNavigator(
  // Menu names and associated tab classes
  {
    Profile: Profile,
    Connec: Connec,
    Camera: Camera,
    Contacts: Contacts
  },
  // Menu icons
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Profile') {
          iconName = `person`;
        } else if (routeName === 'Connec') {
          iconName = `texture`;
        } else if (routeName === 'Camera') {
          iconName = `camera`; 
        } else if (routeName === 'Contacts') {
          iconName = `contacts`;
        }

        // Return standard Icon component from react-native-elements
        return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    // Menu colors
    // tabBarOptions: {
    //   // Color of icon tints, defaults to native OS color defaults
    //   activeTintColor: '#007AFF', // #007AFF is iOS active color
    //   inactiveTintColor: 'gray',
    // },
  }
);


// Provider: Makes store available to all components
export default class Root extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigator />
      </Provider>
    );
  }
}

