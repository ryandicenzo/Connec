import React from 'react';

// Icons: https://material.io/tools/icons/
import { Icon } from 'react-native-elements';

// Tab Navigation: https://reactnavigation.org/docs/en/tab-based-navigation.html
import { createBottomTabNavigator } from 'react-navigation';

// Import Provider to wrap our app's highest level component
import { Provider } from 'react-redux';

// Import our app's store and persistor
import {store, persistor } from './redux/store';

// Wrap root component with PersistGate
import { PersistGate } from 'redux-persist/lib/integration/react';

// Import app tab components
import Profile from './tabs/Profile';
import Connec from './tabs/Connec';
import Camera from './tabs/Camera';

// Bottom Tab Menu
const Navigator = createBottomTabNavigator(
  // Set menu names and order (menuTitle, importedComponentName)
  {
    Connec: Connec,
    Profile: Profile,
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
    // Set menu colors
     tabBarOptions: {
    //   // Color of icon tints, defaults to native OS color defaults
       activeTintColor: '#2E728F', // #007AFF is iOS active color
       inactiveTintColor: '#b7a99c', // grey is standard
     },
  }
);


// Provider: Boilerplate to make the Redux store available to all components by wrapping the top level component, Navigator
export default class Root extends React.Component {
  render() {

    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
      </Provider>
    );
  }
}
