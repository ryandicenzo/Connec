import React from 'react';
import { TextInput, View, ScrollView } from 'react-native';
// Components: https://react-native-training.github.io/react-native-elements/
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Text, Icon, Header, List, ListItem, FormLabel, FormInput, FormValidationMessage, Avatar } from 'react-native-elements';
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
      <ScrollView>
        <Header
          centerComponent={{ text: 'PROFILE', style: { color: '#fff' } }}
        />
        
        <View style={{alignItems: 'center', marginTop: 20, marginBottom: 10}}>
          <Avatar
            xlarge
            rounded
            source={{uri: this.props.profile.avatar}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        </View>
        
        {/* Contact */}
        <FormLabel>Contact</FormLabel>
        <FormInput
          placeholder="First name"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              fname: text,
            }))
          }}
        />
        <FormInput
          placeholder="Last name"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              lname: text,
            }))
          }}
        />
        <FormInput
          placeholder="Company / organization"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              company: text,
            }))
          }}
        />
        <FormInput
          placeholder="Profile image link"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              avatar: text,
            }))
          }}
        />
        
        {/* Phone */}
        <FormLabel>Phone</FormLabel>
        <FormInput
          placeholder="Personal phone"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              hphone: text,
            }))
          }}
        />
        <FormInput
          placeholder="Work phone"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              wphone: text,
            }))
          }}
        />
        
        {/* Social Profiles */}
        <FormLabel>Social Profiles</FormLabel>
        <FormInput
          placeholder="Facebook"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              facebook: text,
            }))
          }}
        />
        <FormInput
          placeholder="LinkedIn"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              linkedin: text,
            }))
          }}
        />
        <FormInput
          placeholder="Instagram"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              instagram: text,
            }))
          }}
        />
        <FormInput
          placeholder="Snapchat"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              snapchat: text,
            }))
          }}
        />
        <FormInput
          placeholder="Twitter"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              twitter: text,
            }))
          }}
        />
        
        {/* Email */}
        <FormLabel>Email</FormLabel>
        <FormInput
          placeholder="Personal email"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              homeemail: text,
            }))
          }}
        />
        <FormInput
          placeholder="Work / school email"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              workemail: text,
            }))
          }}
        />
        
        {/* Birthday */}
        <FormLabel>Birthday</FormLabel>
        <FormInput
          placeholder="Month (XX)"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              bmonth: text,
            }))
          }}
        />
        <FormInput
          placeholder="Day (XX)"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              bday: text,
            }))
          }}
        />
        <FormInput
          placeholder="Year (XXXX)"
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              byear: text,
            }))
          }}
        />

      </ScrollView>
    );
  }
}

// Connect component to Redux store
export default connect(state => state)(Profile);
