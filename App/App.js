import React from 'react';
import { StyleSheet, Text, TextInput, View, Alert, Linking, Dimensions, LayoutAnimation, StatusBar, TouchableOpacity } from 'react-native';
// Components: https://react-native-training.github.io/react-native-elements/
// Icons: https://material.io/tools/icons/
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Button, ButtonGroup, Icon, Header, List, ListItem, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
// Tab Navigation: https://reactnavigation.org/docs/en/tab-based-navigation.html
import { createBottomTabNavigator } from 'react-navigation';
// QR Code Scanner: https://github.com/cssivision/react-native-qrcode
import QRCode from 'react-native-qrcode';
import { BarCodeScanner, Permissions } from 'expo';
import { Provider, connect } from 'react-redux';

import Store from './redux/store';

// Import my pages
import Profile from './pages/Profile';
import Connec from './pages/Connec';


class User {
  constructor(name, facebook, email)
  {
    this.name = name
    this.facebook = facebook
    this.email = email
  }

  setName(name)
  {
    this.name = name
  }

  getName()
  {
    return this.name
  }

}

homeuser = new User('Ryan', 'http://www.facebook.com', 'dicenzoryan@gmail.com')

// Camera Tab: QR scanner
class Camera extends React.Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();
      this.setState({ lastScannedUrl: result.data });
    }
  };

  render() {
    return (
      <View style={styles.container}>

        {this.state.hasCameraPermission === null
          ? <Text>Requesting for camera permission</Text>
          : this.state.hasCameraPermission === false
              ? <Text style={{ color: '#fff' }}>
                  Camera permission is not granted
                </Text>
              : <BarCodeScanner
                  onBarCodeRead={this._handleBarCodeRead}
                  style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                  }}
                />}

        {this._maybeRenderUrl()}

        <StatusBar hidden />
      </View>
    );
  }

  _handlePressUrl = () => {
    Alert.alert(
      'Open this URL?',
      this.state.lastScannedUrl,
      [
        {
          text: 'Yes',
          onPress: () => Linking.openURL(this.state.lastScannedUrl),
        },
        { text: 'No', onPress: () => {} },
      ],
      { cancellable: false }
    );
  };

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

  _maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }

    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
          <Text numberOfLines={1} style={styles.urlText}>
            {this.state.lastScannedUrl}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={this._handlePressCancel}>
          <Text style={styles.cancelButtonText}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
}
// Contacts Tab
class Contacts extends React.Component {
  render() {
    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Brendon Wong',
        avatar_url: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p50x50/38437704_2274402412577090_1999264159111315456_n.jpg?_nc_cat=109&_nc_ht=scontent-lax3-1.xx&oh=472e195838beafe5594785f303dabe48&oe=5C82D4EC',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Shilpi Shah',
        avatar_url: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p50x50/27971915_779561602243579_1075263478330624291_n.jpg?_nc_cat=102&_nc_ht=scontent-lax3-1.xx&oh=244ae0900a0a7b6e4a06bd390a1e0dc3&oe=5C769C97',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Sohum Hulyalkar',
        avatar_url: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p50x50/35971407_638155476530427_4324831599473459200_n.jpg?_nc_cat=104&_nc_ht=scontent-lax3-1.xx&oh=6b7983e3bb130698925bee57f7dd9d0f&oe=5C48B566',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Ryan DiCenzo',
        avatar_url: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p50x50/37898647_489897241450736_6836036219382530048_n.jpg?_nc_cat=106&_nc_ht=scontent-lax3-1.xx&oh=c45bc9e6e4a4e991f534a5fb989a4fe0&oe=5C3E36F3',
        subtitle: 'Vice Chairman'
      },
    ]

    return (
      <View>
        <Header
          centerComponent={{ text: 'CONTACTS', style: { color: '#fff' } }}
        />
        <List containerStyle={{marginBottom: 20}}>
          {
            list.map((l) => (
              <ListItem
                roundAvatar
                avatar={{uri:l.avatar_url}}
                key={l.name}
                title={l.name}
              />
            ))
          }
        </List>
      </View>
    );
  }
}


// Bottom Tab Menu
const MyNavigator = createBottomTabNavigator(
  // Menu names and associated tab classes
  {
    Profile: Profile,
    Connec: Connec,
    Contacts: Contacts,
    Camera: Camera
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

// Provider Code
export default class Root extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <MyNavigator />
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row',
  },
  url: {
    flex: 1,
  },
  urlText: {
    color: '#fff',
    fontSize: 20,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
});
