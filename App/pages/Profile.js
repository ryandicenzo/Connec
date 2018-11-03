import React from 'react';
import { StyleSheet, Text, TextInput, View, Alert, Linking, Dimensions, LayoutAnimation, StatusBar, TouchableOpacity } from 'react-native';
// Components: https://react-native-training.github.io/react-native-elements/
// Icons: https://material.io/tools/icons/
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Button, ButtonGroup, Icon, Header, List, ListItem, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
//

// Profile Tab
class Profile extends React.Component {

state = {
  name: '',
}

  render() {

    return (
      <View>
        <Header
          centerComponent={{ text: 'PROFILE', style: { color: '#fff' } }}
        />

        <FormLabel>Enter your name!</FormLabel>
        <FormInput>Name</FormInput>


        <Text>User: {homeuser.getName()}</Text>

        </View>
    );
  }
}

export default Profile;
