import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Components: https://react-native-training.github.io/react-native-elements/
// Icons: https://material.io/tools/icons/
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Button, ButtonGroup, Icon, Header, List, ListItem } from 'react-native-elements';
// Tab Navigation: https://reactnavigation.org/docs/en/tab-based-navigation.html
import { createBottomTabNavigator } from 'react-navigation';
// QR Code Scanner: https://github.com/cssivision/react-native-qrcode
import QRCode from 'react-native-qrcode';


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
    userinfo = {
      "name": "Ryan DiCenzo",
      "avatar": "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p50x50/37898647_489897241450736_6836036219382530048_n.jpg?_nc_cat=106&_nc_ht=scontent-lax3-1.xx&oh=c45bc9e6e4a4e991f534a5fb989a4fe0&oe=5C3E36F3",
      "title": "Software Engineer"
    }
    var qrstring = "";
    for (var key in userinfo) {
      qrstring = qrstring + (userinfo[key])
    }
    
    return (
      <View>
        <Header
          centerComponent={{ text: 'CONNEC', style: { color: '#fff' } }}
        />
        <View>
          <QRCode
            value={qrstring}
            size={200}
            bgColor='purple'
            fgColor='white'
          />
        </View>
      </View>
    );
  }
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
