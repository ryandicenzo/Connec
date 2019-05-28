import React from 'react';
import { TextInput, View, ScrollView, KeyboardAvoidingView, StyleSheet, Switch, Image } from 'react-native';
// Components: https://react-native-training.github.io/react-native-elements/
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Text, Icon, Header, List, ListItem, FormLabel, FormInput, FormValidationMessage, Avatar, CheckBox } from 'react-native-elements';
// Connect components to Redux
import { connect } from 'react-redux';

import { set as setProfile } from '../redux/profile/actions';
import { Constants } from 'expo';
import ConnecHeader from '../components/ConnecHeader.js'
import ProfileInput from '../components/profileinput.js'


const theme = {
  colors: {
    primary: '#6CB4D2',
    switchOn: '#6CB4D2',
    switchOff: '#ffe8d3'
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

        <ConnecHeader></ConnecHeader>
        <FormLabel labelStyle={styles.label}>Contact</FormLabel>

        <FormInput containerStyle={styles.inputContainer}
          placeholder="First Name"
          defaultValue= {this.props.profile.fname}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              fname: text,
            }))
          }}
        />

        <FormInput containerStyle={styles.inputContainer}
          placeholder="Last Name"
          defaultValue= {this.props.profile.lname}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              lname: text,
            }))
          }}
        />

        <FormInput containerStyle={styles.inputContainer}
          placeholder="Company / Organization"
          defaultValue= {this.props.profile.company}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              company: text,
            }))
          }}
        />

        {/* Profile Photo

        <View style={styles.inputRow}>
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

        <View style={styles.inputRow}>
        <FormInput containerStyle={styles.inputContainer}
          placeholder="Personal Phone"
          defaultValue= {this.props.profile.hphone}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              hphone: text,
            }))
          }}
        />

        <Switch
          trackColor={{ true: theme.colors.switchOn, false: theme.colors.switchOff }}
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

        <View style={styles.inputRow}>
        <FormInput containerStyle={styles.inputContainer}
          placeholder="Work Phone"
          defaultValue= {this.props.profile.wphone}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              wphone: text,
            }))
          }}
        />
        <Switch
          trackColor={{ true: theme.colors.switchOn, false: theme.colors.switchOff }}
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({wphone_sw: isSwitchOn}))
          }}
          value={this.props.profile.wphone_sw}
        />
        </View>

        {/* Social Profiles */}
        <FormLabel labelStyle={styles.label}>Social Profiles</FormLabel>  
        <View style={styles.inputRowSocial}>
            <Icon name='facebook' type='material-community' iconStyle={styles.icon}/>
            <View style={{ flex: 1 }}>
              <FormInput containerStyle={styles.inputContainerIcon}
                autoCapitalize='none'
                placeholder="Facebook (full profile link)"
                defaultValue={this.props.profile.facebook}
                onChangeText={(text) => {
                  this.setState({ text });
                  this.props.dispatch(setProfile({
                    facebook: text,
                  }))
                }}
              />  
            </View>
            
        <Switch
          trackColor={{ true: theme.colors.switchOn, false: theme.colors.switchOff }}
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({fb_sw: isSwitchOn}))
          }}
          value={this.props.profile.fb_sw}
        />
        </View>

          <View style={styles.inputRowSocial}>
        <Icon name='instagram' type='material-community' iconStyle={styles.icon} />
            <FormInput containerStyle={styles.inputContainerIcon}
          autoCapitalize='none'
          placeholder="Instagram (username)"
          defaultValue= {this.props.profile.instagram}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              instagram: text,
            }))
          }}
        />
        <Switch
          trackColor={{ true: theme.colors.switchOn, false: theme.colors.switchOff }}
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({ig_sw: isSwitchOn}))
          }}
          value={this.props.profile.ig_sw}
        />
        </View>

          <View style={styles.inputRowSocial}>
            <Icon name='snapchat' type='material-community' iconStyle={styles.icon} />
            <FormInput containerStyle={styles.inputContainerIcon}
          autoCapitalize='none'
          placeholder="Snapchat (username)"
          defaultValue= {this.props.profile.snapchat}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              snapchat: text,
            }))
          }}
        />

        <Switch
          trackColor={{ true: theme.colors.switchOn, false: theme.colors.switchOff }}
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({sc_sw: isSwitchOn}))
          }}
          value={this.props.profile.sc_sw}
        />
        </View>  
          <View style={styles.inputRowSocial}>
            <Icon name='twitter' type='material-community' iconStyle={styles.icon} />
            <FormInput containerStyle={styles.inputContainerIcon}
          autoCapitalize='none'
          placeholder="Twitter (username)"
          defaultValue= {this.props.profile.twitter}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              twitter: text,
            }))
          }}
        />

        <Switch
          trackColor={{ true: theme.colors.switchOn, false: theme.colors.switchOff }}
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({tw_sw: isSwitchOn}))
          }}
          value={this.props.profile.tw_sw}
        />
        </View>



        {/* Work Profiles */}
        <FormLabel labelStyle={styles.label}>Work Profiles</FormLabel>

          <View style={styles.inputRowSocial}>
            <Icon name='linkedin' type='material-community' iconStyle={styles.icon} />
            <FormInput containerStyle={styles.inputContainerIcon}
          autoCapitalize='none'
          placeholder="LinkedIn (username)"
          defaultValue= {this.props.profile.linkedin}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              linkedin: text,
            }))
          }}
        />
        <Switch
          trackColor={{ true: theme.colors.switchOn, false: theme.colors.switchOff }}
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({li_sw: isSwitchOn}))
          }}
          value={this.props.profile.li_sw}
        />
        </View>

          <View style={styles.inputRowSocial}>
        <Icon name='web' type='material-community' iconStyle={styles.icon} />
            <FormInput containerStyle={styles.inputContainerIcon}
          autoCapitalize='none'
          placeholder="Personal Website"
          defaultValue= {this.props.profile.homepage}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              homepage: text,
            }))
          }}
        />
        <Switch
          trackColor={{ true: theme.colors.switchOn, false: theme.colors.switchOff }}
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({hp_sw: isSwitchOn}))
          }}
          value={this.props.profile.hp_sw}
        />
        </View>

          <View style={styles.inputRowSocial}>
        <Icon name='github-circle' type='material-community' iconStyle={styles.icon} />
            <FormInput containerStyle={styles.inputContainerIcon}
          autoCapitalize='none'
          placeholder="Github (username)"
          defaultValue= {this.props.profile.github}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              github: text,
            }))
          }}
        />
        <Switch
          trackColor={{ true: theme.colors.switchOn, false: theme.colors.switchOff }}
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({gh_sw: isSwitchOn}))
          }}
          value={this.props.profile.gh_sw}
        />
        </View>



        {/* Email */}
        <FormLabel labelStyle={styles.label}>Email</FormLabel>

        <View style={styles.inputRow}>
            <FormInput containerStyle={styles.inputContainer}
          placeholder="Personal Email"
          defaultValue= {this.props.profile.homeemail}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              homeemail: text,
            }))
          }}
        />

        <Switch
          trackColor={{ true: theme.colors.switchOn, false: theme.colors.switchOff }}
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({hemail_sw: isSwitchOn}))
          }}
          value={this.props.profile.hemail_sw}
        />
        </View>

        <View style={styles.inputRow}>
        <FormInput containerStyle={styles.inputContainer}
          placeholder="Work / School Email"
          defaultValue= {this.props.profile.workemail}
          onChangeText={(text) => {
            this.setState({text});
            this.props.dispatch(setProfile({
              workemail: text,
            }))
          }}
        />
        <Switch
          trackColor={{ true: theme.colors.switchOn, false: theme.colors.switchOff }}
          onValueChange={isSwitchOn => {
            this.setState({isSwitchOn});
            this.props.dispatch(setProfile({wemail_sw: isSwitchOn}))
          }}
          value={this.props.profile.wemail_sw}
        />
        </View>

        {/* Birthday */}

        <View style={styles.inputRow}>
          <FormLabel containerStyle={{ width: '85%'}} labelStyle={styles.label}>Birthday (all fields required)</FormLabel>
            <Switch
            trackColor={{ true: theme.colors.switchOn, false: theme.colors.switchOff }}
            onValueChange={isSwitchOn => {
              this.setState({isSwitchOn});
              this.props.dispatch(setProfile({bday_sw: isSwitchOn}))
            }}
            value={this.props.profile.bday_sw}
          />

        </View>
        <View style={styles.inputRow}>
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

        <View style={styles.inputRow}>
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

        <View style={styles.inputRow}>
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

  label: {
    fontSize: 16,
    color: '#2B95A3'
  },

  inputContainer: {
    flex: 1
    },
  
  inputContainerIcon: {
    flex: 1,
    },

  inputRow: {
    flexBasis: 80,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 3
  },
  
  inputRowSocial: {
    flexBasis: 80,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 3,
    paddingLeft: 10
  },

  icon: {
    color: '#2E728F'
  }

});

// Connect component to Redux store
export default connect(state => state)(Profile);
