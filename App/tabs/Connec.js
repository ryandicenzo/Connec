import React from 'react';
import { View, Alert, Share, StyleSheet, Platform, Image } from 'react-native';
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Text, Header, Button, Icon } from 'react-native-elements';
// Create QR code for a string
import QRCode from 'react-native-qrcode';
// Connect components to Redux
import { connect } from 'react-redux';
import vcard from 'vcard-generator'
import { FileSystem, Constants, IntentLauncherAndroid } from 'expo';

const theme = {
  colors: {
    primary: '#6CB4D2',
    secondary: '#2E728F'
  }
}
// Connec Tab: QR code display
class Connec extends React.Component {

  constructVCard() {
    info = this.props.profile

    if (!info.fname && !info.lname){
      return 'please input your information'
    } else {


      var fname = info.fname
      var lname = info.lname
      var company = info.company
      var hphone = info.hphone
      var wphone = info.wphone
      var homeemail = info.homeemail
      var workemail = info.workemail
      var homepage = info.homepage
      /*var street = info.street
      var city = info.city
      var zip = info.zip
      var country = info.country */
      var byear = info.byear
      var bmonth = info.bmonth
      var bday = info.bday

      var twitter = info.twitter
      var facebook = info.facebook
      var linkedin = info.linkedin
      var snapchat = info.snapchat
      var instagram = info.instagram
      var github = info.github

      const vcardContent = vcard.generate({
        name: {
          familyName: lname,
          givenName: fname,
        },
        works: [{
          organization: company,
        }],
        emails: [{
          type: 'work',
          text: ((info.wemail_sw) ? workemail : ''),
        }, {
          type: 'home',
          text: ((info.hemail_sw) ?  homeemail : ''),
        }],
        phones: [{
          type: 'work',
          text: ((info.wphone_sw) ? wphone : ''),
        }, {
          text: ((info.hphone_sw) ? hphone : ''),
        }],
        urls: [{
          type: 'personal',
          uri: ((homepage && info.hp_sw) ? homepage : ''),
        }, {
          type: 'twitter',
          uri: ((twitter && info.tw_sw) ? 'twitter.com/' + twitter : '')
        },
        {
          type: 'facebook',
          uri: ((facebook && info.fb_sw) ? 'facebook.com/' + facebook : '')
        },
        {
          type: 'linkedin',
          uri: ((linkedin && info.li_sw) ? 'linkedin.com/in/' + linkedin : '')
        },
        {
          type: 'github',
          uri: ((github && info.gh_sw) ? 'www.github.com/' + github : '')
        },
        {
          type: 'snapchat',
          uri: ((snapchat && info.sc_sw) ? 'www.snapchat.com/add/' + snapchat : '')
        },
        {
          type: 'instagram',
          uri:((instagram && info.ig_sw) ? 'www.instagram.com/' + instagram : '')
        }],
        birthday : {
          year: ((info.bday_sw) ? parseInt(byear) : ''),
          month: ((info.bday_sw) ? parseInt(bmonth) : ''),
          day: ((info.bday_sw) ? parseInt(bday) : '')
        }
      })

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

      Expo.FileSystem.writeAsStringAsync(FileSystem.documentDirectory + this.fname + '_' + this.lname + '.vcf', vcardContent)

      return vcardContent
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
          <Text style={styles.category}>iPhone (iOS 11+):</Text>
          <Text style={styles.body}>Open camera and Scan!</Text>
          <Text style={styles.category}>Android</Text>
          <Text style={styles.body}>On Android 6.0+, Use your Default Camera</Text>
          <Text style={styles.body}>Do you have Google Assistant?</Text>
          <Text style={styles.body}>Open Assistant and click the lower right icon!</Text>

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
