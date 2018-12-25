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
    this.state = {text: ''};
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
        <Switch></Switch>
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
        <Switch></Switch>
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
        <Switch></Switch>
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
        <Switch></Switch>
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
        <Switch></Switch>
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

        <Switch></Switch>
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

        <Switch></Switch>
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

        <Switch></Switch>
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

        <Switch></Switch>
        </View>

        {/* Birthday */}
        <FormLabel labelStyle={styles.label}>Birthday (MM/DD/YYYY)</FormLabel>

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

        <Switch></Switch>
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

        <Switch></Switch>
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

        <Switch></Switch>
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
