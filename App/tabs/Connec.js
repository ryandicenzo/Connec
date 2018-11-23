import React from 'react';
import { View, Alert, Share, StyleSheet } from 'react-native';
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Text, Header, Button, Icon } from 'react-native-elements';
// Create QR code for a string
import QRCode from 'react-native-qrcode';
// Connect components to Redux
import { connect } from 'react-redux';
import vcard from 'vcard-generator'
import { FileSystem, Constants } from 'expo';

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
        text: workemail,
      }, {
        type: 'home',
        text: homeemail,
      }],
      phones: [{
        type: 'work',
        text: wphone,
      }, {
        text: hphone,
      }],
      urls: [{
        type: 'personal',
        uri: homepage,
      }, {
        type: 'twitter',
        uri: ((twitter) ? 'twitter.com/' + twitter : '')
      },
      {
        type: 'facebook',
        uri: ((facebook) ? 'facebook.com/' + facebook : '')
      },
      {
        type: 'linkedin',
        uri: ((linkedin) ? 'linkedin.com/in/' + linkedin : '')
      },
      {
        type: 'snapchat',
        uri: ((snapchat) ? 'www.snapchat.com/add/' + snapchat : '')
      },
      {
        type: 'instagram',
        uri:((instagram) ? 'www.instagram.com/' + instagram : '')
      }],
      birthday : {
        year: parseInt(byear),
        month: parseInt(bmonth),
        day: parseInt(bday)
      }
    })

    //this.fname = fname.replace(/\s+/g, '');
    //this.lname = lname.replace(/\s+/g, '');

    //Expo.FileSystem.writeAsStringAsync(FileSystem.documentDirectory + fname + lname + '.vcf', vcardContent)

    return vcardContent

  }

  vCard = this.constructVCard()

  shareVCard()  {
    const result = Share.share({
          url:
            FileSystem.documentDirectory + this.fname + this.lname + '.vcf', title: 'share',
          })
        }

  render() {

    this.vCard = this.constructVCard()

    return (
      <View>
      <View style = {styles.header}>
        <Header
        centerComponent={{ text: 'c o n n e c', style: { color: '#fff', alignSelf: 'center', fontSize: 30} }}
        rightComponent={<Icon name='send' color='white' onPress={() => this.shareVCard()} />}

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
    paddingTop : Constants.statusBarHeight * 1,
    backgroundColor : theme.colors.primary
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
