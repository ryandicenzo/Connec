import React, { Component } from 'react';
import { TextInput, Switch, View, StyleSheet } from 'react-native';

import { FormInput } from 'react-native-elements';
import { set as setProfile } from '../redux/profile/actions';

class ProfileInput extends Component {

  constructor(props) {
   super(props)
   }

  render() {
   return (
     <View style={{ flex: 1, flexDirection: 'row'}}>
      <FormInput containerStyle={{ width: '75%' }}
      placeholder={this.props.placeholder}
      defaultValue= {this.props.defaultValue}
      onChangeText={(text) => {
        this.setState({text});
        this.props.dispatch(setProfile({
          fname: text,
        }))
      }}
      />
      <Switch></Switch>
      </View>
   )
   }
}

const styles = StyleSheet.create({
})

export default ProfileInput
