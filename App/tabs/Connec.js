import React from 'react';
import { View, Alert, Share, StyleSheet, Platform, Image } from 'react-native';
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Text, Header, Button, Icon } from 'react-native-elements';
// Create QR code for a string
import QRCode from 'react-native-qrcode';
// Connect components to Redux
import { connect } from 'react-redux';
// import vcard from 'vcard-generator'
import { FileSystem, Constants, IntentLauncherAndroid } from 'expo';

const theme = {
  colors: {
    primary: '#6CB4D2',
    secondary: '#2E728F'
  }
}
// Connec Tab: QR code display
class Connec extends React.Component {

  switchHelper(switchVal, returnVal) {
    if (!switchVal) {
      return '';
    }
    return returnVal;
  }

  constructVCard() {
    info = this.props.profile

    if (!info.fname && !info.lname){
      return 'please input your information'
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
      var twitter = helper(info.tw_sw, info.twitter)
      var facebook = helper(info.fb_sw, 'www.facebook.com/' + info.facebook)
      var linkedin = helper(info.li_sw, 'www.linkedin.com/in/' + info.linkedin)
      var snapchat = helper(info.sc_sw, 'www.snapchat.com/add' + info.snapchat)
      var instagram = helper(info.ig_sw, 'www.instagram.com/' + info.instagram)
      var github = helper(info.gh_sw, 'www.github.com/' + info.github)

      contact.firstName = fname
      contact.lastName = lname
      contact.homePhone = hphone
      contact.workPhone = wphone
      contact.email = homeemail
      contact.workEmail = workemail
      contact.url = homepage
      contact.socialUrls['Facebook'] = facebook
      contact.socialUrls['LinkedIn'] = linkedin
      contact.socialUrls['Twitter'] = twitter
      contact.socialUrls['Snapchat'] = snapchat
      contact.socialUrls['Github'] = github
      contact.socialUrls['Instagram'] = instagram
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

      Expo.FileSystem.writeAsStringAsync(FileSystem.documentDirectory + this.fname + '_' + this.lname + '.vcf', contact.getFormattedString())

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
      <View style = {styles.header}>
        <Header
        centerComponent={
          <View>
          <Image
            resizeMode="cover"
            style={{
              width: 300,
              height: 64,
              resizeMode: 'contain',
              alignSelf: 'center'}}
            source={require('./../assets/connec_logo_logo_white.png')}
        />
        </View>
      }
        rightComponent= { this.renderShare ? <Icon name='send' color='white' onPress={() => this.shareVCard()} /> : null }
        backgroundColor= 'theme.colors.primary'
        />
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '85%'}}>
          <QRCode
            value={this.vCard}
            size={280}
            //bgColor='white'
            //fgColor='black'
          />
          <View style={{paddingBottom: '10%'}}/>
          <Text style={styles.category}>How to Share</Text>
          <Text style={styles.body}>Open any QR-capable camera and scan!</Text>
          <Text style={styles.body}>The QR code will load as a contact that is ready to add.</Text>
          <Text style={styles.body}>Alternatively, click the send button on the upper right to share via text, email, messaging, and more.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop : Constants.statusBarHeight * 1.75,
    backgroundColor : theme.colors.primary,
  },
  category: {
    fontSize: 16,
    margin: 8,
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center'
  },
  body: {
    margin: 1,
    textAlign: 'center'
  }

});


// Connect component to Redux store
export default connect(state => state)(Connec);
