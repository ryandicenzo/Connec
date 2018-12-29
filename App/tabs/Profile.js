import React from 'react';
import { TextInput, View, ScrollView, KeyboardAvoidingView, StyleSheet, Switch} from 'react-native';
// Components: https://react-native-training.github.io/react-native-elements/
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Text, Icon, Header, List, ListItem, FormLabel, FormInput, FormValidationMessage, Avatar, CheckBox } from 'react-native-elements';
// Connect components to Redux
import { connect } from 'react-redux';

import { set as setProfile } from '../redux/profile/actions';
import { Constants } from 'expo';
import ProfileInput from '../components/profileinput.js'


const theme = {
  colors: {
    primary: '#6CB4D2'
  }
}


// Profile Tab
class Profile extends React.Component {
  // Have component local state hold form field text
  constructor(props) {
    super(props);
    this.state = { switch: false, text: ""};
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
      <ScrollView bounces="False">

      <View style = {styles.header}>
        <Header
        centerComponent={{ text: 'c o n n e c', style: { color: '#fff', alignSelf: 'center', fontSize: 30} }}
        backgroundColor= 'theme.colors.primary'
        />
        </View>

{/*
        <View style={{alignItems: 'center', marginTop: 20, marginBottom: 10}}>
        <Avatar
        xlarge
        rounded
        source={{uri: this.props.profile.avatar}}
        onPress={() => console.log("Add Upload Photo!")}
        activeOpacity={0.7}
        />
      </View>
*/}

        <FormLabel labelStyle={styles.label}>Contact</FormLabel>

        <FormInput containerStyle={styles.inputContainer}
          placeholder="First name"
          defaultValue= {this.props.profile.fname}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              fname: text,
            }))
          }}
        />

        <FormInput containerStyle={styles.inputContainer}
          placeholder="Last name"
          defaultValue= {this.props.profile.lname}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              lname: text,
            }))
          }}
        />

        <FormInput containerStyle={styles.inputContainer}
          placeholder="Company / organization"
          defaultValue= {this.props.profile.company}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              company: text,
            }))
          }}
        />

        {/* Profile Photo

        <View style={{ flex: 1, flexDirection: 'row'}}>
        <FormInput containerStyle={styles.inputContainer}
          placeholder="Profile image link"
          defaultValue= {this.props.profile.avatar}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              avatar: text,
            }))
          }}
        />
        <Switch></Switch>
        </View>
        */}


        {/* Phone */}
        <FormLabel labelStyle={styles.label}>Phone</FormLabel>

        <View style={{ flex: 1, flexDirection: 'row'}}>
        <FormInput containerStyle={styles.inputContainer}
          placeholder="Personal phone"
          defaultValue= {this.props.profile.hphone}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              hphone: text,
            }))
          }}
        />

        <Switch
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({hphone_sw: isSwitchOn}))
          }}
          value={this.props.profile.hphone_sw}
        />

{/*

        <Switch
         onValueChange= {
           switch => {
           this.setState({switch});
           this.props.dispatch(setProfile({
             hphone_sw: switch,
           }))
         }}
        />

        */ }

        </View>

        <View style={{ flex: 1, flexDirection: 'row'}}>
        <FormInput containerStyle={styles.inputContainer}
          placeholder="Work phone"
          defaultValue= {this.props.profile.wphone}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              wphone: text,
            }))
          }}
        />
        <Switch
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({wphone_sw: isSwitchOn}))
          }}
          value={this.props.profile.wphone_sw}
        />
        </View>

        {/* Social Profiles */}
        <FormLabel labelStyle={styles.label}>Social Profiles</FormLabel>

        <View style={{ flex: 1, flexDirection: 'row'}}>
        <FormInput containerStyle={styles.inputContainer}
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
        <Switch
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({fb_sw: isSwitchOn}))
          }}
          value={this.props.profile.fb_sw}
        />
        </View>

        <View style={{ flex: 1, flexDirection: 'row'}}>
        <FormInput containerStyle={styles.inputContainer}
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
        <Switch
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({li_sw: isSwitchOn}))
          }}
          value={this.props.profile.li_sw}
        />
        </View>

        <View style={{ flex: 1, flexDirection: 'row'}}>
        <FormInput containerStyle={styles.inputContainer}
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
        <Switch
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({ig_sw: isSwitchOn}))
          }}
          value={this.props.profile.ig_sw}
        />
        </View>


        <View style={{ flex: 1, flexDirection: 'row'}}>
        <FormInput containerStyle={styles.inputContainer}
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

        <Switch
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({sc_sw: isSwitchOn}))
          }}
          value={this.props.profile.sc_sw}
        />
        </View>

        <View style={{ flex: 1, flexDirection: 'row'}}>
        <FormInput containerStyle={styles.inputContainer}
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

        <Switch
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({tw_sw: isSwitchOn}))
          }}
          value={this.props.profile.tw_sw}
        />
        </View>

        {/* Email */}
        <FormLabel labelStyle={styles.label}>Email</FormLabel>

        <View style={{ flex: 1, flexDirection: 'row'}}>
        <FormInput containerStyle={styles.inputContainer}
          placeholder="Personal email"
          defaultValue= {this.props.profile.homeemail}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              homeemail: text,
            }))
          }}
        />

        <Switch
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({hemail_sw: isSwitchOn}))
          }}
          value={this.props.profile.hemail_sw}
        />
        </View>

        <View style={{ flex: 1, flexDirection: 'row'}}>
        <FormInput containerStyle={styles.inputContainer}
          placeholder="Work / school email"
          defaultValue= {this.props.profile.workemail}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              workemail: text,
            }))
          }}
        />
        <Switch
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({wemail_sw: isSwitchOn}))
          }}
          value={this.props.profile.wemail_sw}
        />
        </View>

        {/* Birthday */}

        <View style={{ flex: 1, flexDirection: 'row',paddingTop: 5}}>
          <FormLabel containerStyle={{ width: '85%'}} labelStyle={styles.label}>Birthday (MM/DD/YYYY)</FormLabel>
            <Switch
            onValueChange={isSwitchOn => {
              this.setState({isSwitchOn});
              this.props.dispatch(setProfile({bday_sw: isSwitchOn}))
            }}
            value={this.props.profile.bday_sw}
          />

        </View>
        <View style={{ flex: 1, flexDirection: 'row'}}>
        <FormInput containerStyle={styles.inputContainer}
          placeholder="Month (MM)"
          defaultValue= {this.props.profile.bmonth}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              bmonth: text,
            }))
          }}
        />
        </View>

        <View style={{ flex: 1, flexDirection: 'row'}}>
        <FormInput containerStyle={styles.inputContainer}
          placeholder="Day (DD)"
          defaultValue= {this.props.profile.bday}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              bday: text,
            }))
          }}
        />
        </View>

        <View style={{ flex: 1, flexDirection: 'row'}}>
        <FormInput containerStyle={styles.inputContainer}
          placeholder="Year (YYYY)"
          defaultValue= {this.props.profile.byear}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              byear: text,
            }))
          }}
        />
        </View>

      </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop : Constants.statusBarHeight,
    backgroundColor : theme.colors.primary
  },

  label: {
    fontSize: 16,
    color: theme.colors.primary
  },

  inputContainer: {
    width: '75%'
  }
});


// Connect component to Redux store
export default connect(state => state)(Profile);
