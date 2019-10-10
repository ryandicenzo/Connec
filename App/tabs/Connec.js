import React from 'react';
import { View, Share, StyleSheet, Platform, Dimensions } from 'react-native';
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Text, Icon } from 'react-native-elements';
// Create QR code for a string
// Comment out react-native-qrcode to test new library
//import QRCode from 'react-native-qrcode';
import QRCode from 'react-native-qrcode-svg';
// Connect components to Redux
import { connect } from 'react-redux';
// import vcard from 'vcard-generator'
import { IntentLauncherAndroid } from 'expo';
import * as FileSystem from 'expo-file-system';
import Constants from 'expo-constants'
import ConnecHeader from '../components/ConnecHeader.js';

const theme = {
  colors: {
    primary: '#6CB4D2',
    secondary: '#2E728F',
    button: '#2E728F',
    orange: '#FF9406'
  }
}
// Connec Tab: QR code display
class Connec extends React.Component {

  emptyProfileMessage = 'Contact information must be added in the Connec profile tab';

  switchHelper(switchVal, returnVal) {
    if (!switchVal) {
      return '';
    }
    return returnVal;
  }

  constructVCard() {
    info = this.props.profile

    if (!info.fname && !info.lname){
      return this.emptyProfileMessage
    } else {
      var vCard = require('./vCardFormatter/index.js')
      var helper = this.switchHelper
      var contact = new vCard()

      var fname = info.fname
      var lname = info.lname
      var company = info.company
      var hphone = helper(info.hphone_sw, info.hphone)
      var wphone = helper(info.wphone_sw, info.wphone)
      var homeemail = helper(info.hemail_sw, info.homeemail)
      var workemail = helper(info.wemail_sw, info.workemail)
      var homepage = helper(info.hp_sw, info.homepage)
      var byear = helper(info.bday_sw, info.byear)
      var bmonth = helper(info.bday_sw, info.bmonth)
      var bday = helper(info.bday_sw, info.bday)
      var twitter = helper(info.tw_sw, 'www.twitter.com/' + info.twitter)
      var facebook = helper(info.fb_sw, 'www.facebook.com/' + info.facebook)
      var linkedin = helper(info.li_sw, 'www.linkedin.com/in/' + info.linkedin)
      var snapchat = helper(info.sc_sw, 'www.snapchat.com/add/' + info.snapchat)
      var instagram = helper(info.ig_sw, 'instagram.com/' + info.instagram)
      var github = helper(info.gh_sw, 'github.com/' + info.github)

      contact.firstName = fname
      contact.lastName = lname
      contact.homePhone = hphone
      contact.workPhone = wphone
      contact.email = homeemail
      contact.workEmail = workemail
      contact.url['Homepage'] = homepage
      contact.url['Facebook'] = facebook
      contact.url['LinkedIn'] = linkedin
      contact.url['Twitter'] = twitter
      contact.url['Snapchat'] = snapchat
      contact.url['Github'] = github
      contact.url['Instagram'] = instagram
      contact.organization = company
      contact.birthday = helper(info.bday_sw, new Date(byear, bmonth, bday))

      this.fname = fname
      this.lname = lname

      // Remove white space from first and last nmae

      if(this.fname) {
        this.fname = fname.replace(/\s+/g, '');
      }
      if(this.lname){
        this.lname = lname.replace(/\s+/g, '');
      }

      // Save .vcf file to be shared

      FileSystem.writeAsStringAsync(FileSystem.documentDirectory + this.fname + '_' + this.lname + '.vcf', contact.getFormattedString())
      FileSystem.writeAsStringAsync(FileSystem.documentDirectory + "_initial.vcf", "")

      return contact.getFormattedString()
    }
  }

  shareVCard()  {

    var uri = FileSystem.documentDirectory + this.fname + '_' + this.lname + '.vcf', title: 'share'

    if(Platform.OS == 'ios'){
      const result = Share.share({
        url: uri
      })
    }

    {/* else {
       IntentLauncherAndroid.startActivityAsync('android.intent.action.PICK_CONTACT', {URI : uri});
    }
    // Android Sharing currently not functional */ }
  }

  render() {

    this.vCard = this.constructVCard()
    this.renderShare = (Platform.OS === 'ios')
    
    return (
      <View>
        <View style={styles.container}>
          <ConnecHeader></ConnecHeader>
          <View style={{alignItems: 'center', justifyContent: 'center', alignSelf: 'center', paddingTop: '15%', paddingBottom: '10%'}}>
          <QRCode value={this.vCard} size={Dimensions.get('window').width * .75}/>
          </View>
          <View style={{flex: 1}}>
              {this.renderShare ? <Icon reverse raised  name='send' style={styles.share} color={theme.colors.orange} onPress={() => this.shareVCard()} /> : null}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop : Constants.statusBarHeight,
    backgroundColor : "#fff",
  },
  category: {
    fontSize: 16,
    margin: 8,
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center'
  },
  container: {
    alignItems: 'center'
  },
  share: {
    paddingTop: '10%',
    paddingBottom: '10%'
  }
});

// Connect component to Redux store
export default connect(state => state)(Connec);
