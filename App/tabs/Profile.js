import React from 'react';
import { TextInput, View, ScrollView, KeyboardAvoidingView } from 'react-native';
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
      <KeyboardAvoidingView behavior="padding">
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
          defaultValue= {this.props.profile.fname}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              fname: text,
            }))
          }}
        />
        <FormInput
          placeholder="Last name"
          defaultValue= {this.props.profile.lname}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              lname: text,
            }))
          }}
        />
        <FormInput
          placeholder="Company / organization"
          defaultValue= {this.props.profile.company}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              company: text,
            }))
          }}
        />
        <FormInput
          placeholder="Profile image link"
          defaultValue= {this.props.profile.avatar}
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
          defaultValue= {this.props.profile.hphone}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              hphone: text,
            }))
          }}
        />
        <FormInput
          placeholder="Work phone"
          defaultValue= {this.props.profile.wphone}
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
          autoCapitalize='none'
          placeholder="Facebook"
          defaultValue= {this.props.profile.facebook}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              facebook: text,
            }))
          }}
        />
        <FormInput
          autoCapitalize='none'
          placeholder="LinkedIn"
          defaultValue= {this.props.profile.linkedin}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              linkedin: text,
            }))
          }}
        />
        <FormInput
          autoCapitalize='none'
          placeholder="Instagram"
          defaultValue= {this.props.profile.instagram}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              instagram: text,
            }))
          }}
        />
        <FormInput
          autoCapitalize='none'
          placeholder="Snapchat"
          defaultValue= {this.props.profile.snapchat}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              snapchat: text,
            }))
          }}
        />
        <FormInput
          autoCapitalize='none'
          placeholder="Twitter"
          defaultValue= {this.props.profile.twitter}
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
          defaultValue= {this.props.profile.homeemail}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              homeemail: text,
            }))
          }}
        />
        <FormInput
          placeholder="Work / school email"
          defaultValue= {this.props.profile.workemail}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              workemail: text,
            }))
          }}
        />
        
        {/* Birthday */}
        <FormLabel>Birthday (MM/DD/YYYY)</FormLabel>
        <FormInput
          placeholder="Month (MM)"
          defaultValue= {this.props.profile.bmonth}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              bmonth: text,
            }))
          }}
        />
        <FormInput
          placeholder="Day (DD)"
          defaultValue= {this.props.profile.bday}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              bday: text,
            }))
          }}
        />
        <FormInput
          placeholder="Year (YYYY)"
          defaultValue= {this.props.profile.byear}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              byear: text,
            }))
          }}
        />
        
      </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

// Connect component to Redux store
export default connect(state => state)(Profile);
