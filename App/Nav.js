import React from 'react';

import { View } from 'react-native';

// Icons: https://material.io/tools/icons/
import { Icon } from 'react-native-elements';

// Import app tab components
import Profile from './tabs/Profile';
import Connec from './tabs/Connec';
import Camera from './tabs/Camera';


// Tab Navigation: https://reactnavigation.org/docs/en/tab-based-navigation.html
import { createBottomTabNavigator } from 'react-navigation';

function decideScreen(screen) {
  if (screen === 'true') {
    return 'Connec'
  } else {
    return 'Profile'
  }
}

function createNav(screen) {
  const Navigator = createBottomTabNavigator(
    // Set menu names and order (menuTitle, importedComponentName)
    {
      Profile: Profile,
      Connec: Connec,
      Camera: Camera
    },
    // Set menu icons
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Profile') {
            iconName = `person`;
          } else if (routeName === 'Connec') {
            iconName = `camera`;
          } else if (routeName === 'Camera') {
            iconName = 'camera-alt'
          }

          // Return standard Icon component from react-native-elements
          return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        },
      }),
      initialRouteName: decideScreen(screen),
      // Set menu colors
      tabBarOptions: {
        //   // Color of icon tints, defaults to native OS color defaults
        activeTintColor: '#2E728F', // #007AFF is iOS active color
        inactiveTintColor: '#b7a99c', // grey is standard
      }
    },
  );

  return <Navigator/>
}

export class Nav extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <View style={{flex: 1}}>
          {createNav(this.props.contact)}
        </View>
        
        );
      }
}