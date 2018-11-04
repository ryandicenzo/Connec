import React from 'react';
import { View } from 'react-native';
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Text, Header } from 'react-native-elements';
// Create QR code for a string
import QRCode from 'react-native-qrcode';
// Connect components to Redux
import { connect } from 'react-redux';

import vcard from 'vcard-generator'

// Connec Tab: QR code display
class Connec extends React.Component {
  render() {
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
    });



    return (
      <View>
        <Header
          centerComponent={{ text: 'CONNEC', style: { color: '#fff' } }}
        />
        <View style={{alignItems: 'center', justifyContent: 'center', alignSelf: 'center', height: '90%'}}>
          <QRCode
            value={vcardContent}
            size={300}
            bgColor='black'
            fgColor='white'
          />
          <Text h4 style={{ margin: 50, marginTop: 30, marginBottom: 30, textAlign: 'center' }}>
            Scan the QR code with your camera app to load my contact info!
          </Text>
          <Text>
          {}
          </Text>

        </View>
      </View>
    );
  }
}

// Connect component to Redux store
export default connect(state => state)(Connec);
