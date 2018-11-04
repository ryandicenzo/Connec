import React from 'react';

// Icons: https://material.io/tools/icons/
import { Icon } from 'react-native-elements';

// Tab Navigation: https://reactnavigation.org/docs/en/tab-based-navigation.html
import { createBottomTabNavigator } from 'react-navigation';

// Import Provider to wrap our app's highest level component
import { Provider } from 'react-redux';

// Import our app's store
import Store from './redux/store';

// Import app tab components
import Profile from './tabs/Profile';
import Connec from './tabs/Connec';
import Camera from './tabs/Camera';


// Bottom Tab Menu
const Navigator = createBottomTabNavigator(
  // Set menu names and order (menuTitle, importedComponentName)
  {
    Profile: Profile,
    Connec: Connec,
    Camera: Camera,
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
          iconName = `texture`;
        } else if (routeName === 'Camera') {
          iconName = `camera`; 
        }

        // Return standard Icon component from react-native-elements
        return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    // Set menu colors
    // tabBarOptions: {
    //   // Color of icon tints, defaults to native OS color defaults
    //   activeTintColor: '#007AFF', // #007AFF is iOS active color
    //   inactiveTintColor: 'gray',
    // },
  }
);


// Provider: Boilerplate to make the Redux store available to all components by wrapping the top level component, Navigator
export default class Root extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigator />
      </Provider>
    );
  }
}
