import React from 'react';
import { View, Alert, Share, StyleSheet, Platform, Image, Dimensions } from 'react-native';
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Text, Header, Button, Icon, Overlay } from 'react-native-elements';
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

  emptyProfileMessage = 'Please input your information';

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
      var facebook = helper(info.fb_sw, info.facebook)
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


  // TODO: Fix and add proper intro slide tutorial }
  LoadCardOrTutorial(vText) {
    if (vText.vText == 'Please input your information') {
      return <View style = {styles.tutorialContainer}>
        <Text style={styles.tutorialHeader}>Welcome to Connec!</Text>
        
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign:'center', paddingBottom: 20}}>Click on Profile to start building your custom contact!</Text>
        
        <QRCode value={this.vCard} size={Dimensions.get('window').width * .5}/>
        </View>
    } else {
      return <QRCode value={this.vCard} size={Dimensions.get('window').width * .75}/>
    }
  }

  render() {

    this.vCard = this.constructVCard()
    console.log(this.vCard)
    this.renderShare = (Platform.OS === 'ios')
    
    return (
      <View>
      <View style = {styles.header}>
        <Header
        centerComponent={
          <Image
            resizeMode="cover"
            style={{
              flex: 1,
              resizeMode: 'cover',

              aspectRatio: 2}}
            source={require('./../assets/connec_logo_logo_white.png')}
        />
      }
        rightComponent= { this.renderShare ? <Icon name='send' color='white' onPress={() => this.shareVCard()} /> : null }
        backgroundColor= 'theme.colors.primary'
        />
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '85%'}}>
          <this.LoadCardOrTutorial vText={this.vCard}/>

          <View style={{paddingBottom: '10%'}}/>
          <Text style={styles.category}>How to Share</Text>
          <Text style={styles.body}>{'Open any QR-capable camera and scan!\nThe QR code will load as a contact that is ready to add.\nAlternatively, click the send button on the upper right to share via text, email, messaging, and more.'}        </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop : Constants.statusBarHeight,
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
    fontSize: 14,
    margin: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20
  },
  tutorialContainer: {
    alignItems: 'center'
  },
  tutorialHeader: {
    fontSize: 36,
    padding: 10,
    backgroundColor : '#d0d9db',
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center'
  }

});


// Connect component to Redux store
export default connect(state => state)(Connec);