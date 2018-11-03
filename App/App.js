import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonGroup, Icon, Header } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';

class App extends React.Component {
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

export default createBottomTabNavigator({
  Profile: Profile,
  Connec: App,
  Friends: Friends
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 30,
  }
});
