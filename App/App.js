import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonGroup, Icon, Header, List, ListItem } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';
import QRCode from 'react-native-qrcode';

class App extends React.Component {
  render() {

    userinfo = {
    "name": "Ryan DiCenzo",
    "avatar": "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/p50x50/37898647_489897241450736_6836036219382530048_n.jpg?_nc_cat=106&_nc_ht=scontent-lax3-1.xx&oh=c45bc9e6e4a4e991f534a5fb989a4fe0&oe=5C3E36F3",
    "title": "Software Engineer"
  }

  var qrstring = "";
  for(var key in userinfo)
  {
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
        fgColor='white'/>

      </View>

      </View>
    );
  }
}

class Profile extends React.Component {
  render() {

    return (
      <View>
      <Header

      centerComponent={{ text: 'CONNEC', style: { color: '#fff' } }}

      />

      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          icon={{
            name: 'share',
            size: 15,
            color: 'white'
          }}
          title='Scan QR'
        />

      </View>

      </View>
    );
  }
}

class Friends extends React.Component {
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
      centerComponent={{ text: 'FRIENDS', style: { color: '#fff' } }}
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

export default createBottomTabNavigator({
  Profile: Profile,
  Connec: App,
  Friends: Friends
});

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
