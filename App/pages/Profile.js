import React from 'react';
import { StyleSheet, Text, TextInput, View, Alert, Linking, Dimensions, LayoutAnimation, StatusBar, TouchableOpacity } from 'react-native';
// Components: https://react-native-training.github.io/react-native-elements/
// Icons: https://material.io/tools/icons/
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Button, ButtonGroup, Icon, Header, List, ListItem, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

import { connect } from 'react-redux';

import { set as setProfile } from '../redux/profile/actions';

// Profile Tab
class Profile extends React.Component {

state = {
  name: '',
}

  componentDidMount() {
    setTimeout(() => {
      console.log('im going to change things');
      this.props.dispatch(setProfile({
        name: 'real name'
      }))
    }, 5000);
  }

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    console.log(this.props);

    return (
      <View>
        <Header
          centerComponent={{ text: 'PROFILE', style: { color: '#fff' } }}
        />

        <FormLabel>Enter your name!</FormLabel>
                
        <TextInput
          style={{height: 40}}
          placeholder="Enter your name here"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              name: text,
            }))
            }
          }


        />

        </View>
    );
  }
}

export default connect(state => state)(Profile);
