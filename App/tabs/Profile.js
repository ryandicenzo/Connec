import React from 'react';
import { Text, TextInput, View } from 'react-native';
// Components: https://react-native-training.github.io/react-native-elements/
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Button, ButtonGroup, Icon, Header, List, ListItem, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
// Connect components to Redux
import { connect } from 'react-redux';

import { set as setProfile } from '../redux/profile/actions';

// Profile Tab
class Profile extends React.Component {
  // Have component local state hold form field text
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {

    return (
      <View>
        <Header
          centerComponent={{ text: 'PROFILE', style: { color: '#fff' } }}
        />

        <FormLabel>Enter your name!</FormLabel>
        <FormInput
          style={{height: 40}}
          placeholder="Enter your name here"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              name: text,
              email: text,
              hello: 'apple'
            }))
          }}
        />
        
      </View>
    );
  }
}

// Connect component to Redux store
export default connect(state => state)(Profile);
