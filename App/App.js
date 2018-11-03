import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonGroup, Icon } from 'react-native-elements';

export default class App extends React.Component {
  render() {

    const footer = ['Profile', 'Connec', 'Friends']
    
    
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          icon={{
            name: 'share',
            size: 15,
            color: 'white'
          }}
          title='Share User'
        />
        <ButtonGroup style={styles.footer}
          buttons={footer}
          containerStyle={{height:100}}
        />
      
      </View>

      
    );
  }
}

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
