import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Components: https://react-native-training.github.io/react-native-elements/
// Icons: https://material.io/tools/icons/
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Button, ButtonGroup, Icon, Header } from 'react-native-elements';
// https://reactnavigation.org/docs/en/tab-based-navigation.html
import { createBottomTabNavigator } from 'react-navigation';


// Profile Tab
class Profile extends React.Component {
  render() {
    return (
      <View>
      <Header
        centerComponent={{ text: 'PROFILE', style: { color: '#fff' } }}
      />
      </View>
    );
  }
}


// Connec Tab: QR scanner and QR code display
class Connec extends React.Component {
  render() {
    return (
      <View>
      <Header
        centerComponent={{ text: 'CONNEC', style: { color: '#fff' } }}
      />
      </View>
      
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Button
      //     icon={{
      //       name: 'share',
      //       size: 15,
      //       color: 'white'
      //     }}
      //     title='Scan QR'
      //   />
      // 
      // </View>

    );
  }
}


// Contacts Tab
class Contacts extends React.Component {
  render() {
    return (
      <View>
      <Header
        centerComponent={{ text: 'CONTACTS', style: { color: '#fff' } }}
      />
      </View>
    );
  }
}


// Bottom Tab Menu
export default createBottomTabNavigator(
  // Menu names and associated tab classes
  {
    Profile: Profile,
    Connec: Connec,
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
          iconName = `camera`;
        } else if (routeName === 'Contacts') {
          iconName = `contacts`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    // Menu colors
    tabBarOptions: {
      // Color of icon tints, defaults to native defaults
      activeTintColor: '#007AFF', // #007AFF is iOS active color
      inactiveTintColor: 'gray',
    },
  }
);


// By Brendon: This stylesheet causes errors with the provided Expo blank function
// Used with the React Native Elements header

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   footer: {
//     flex: 30,
//   }
// });
