import React from 'react';
import { StyleSheet, Text, TextInput, View, Alert, Linking, Dimensions, LayoutAnimation, StatusBar, TouchableOpacity } from 'react-native';
// Components: https://react-native-training.github.io/react-native-elements/
// Icons: https://material.io/tools/icons/
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Button, ButtonGroup, Icon, Header, List, ListItem, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
// Tab Navigation: https://reactnavigation.org/docs/en/tab-based-navigation.html
// QR Code Scanner: https://github.com/cssivision/react-native-qrcode
import QRCode from 'react-native-qrcode';
import { connect } from 'react-redux';

// Connec Tab: QR code display
class Connec extends React.Component {
  render() {

    info = this.props.profile;

    var fname = info.fname;
    var lname = info.lname;
    var company = info.company;
    var hphone = info.hphone;
    var wphone = info.wphone;
    var homeemail = info.homeemail
    var workemail = info.workemail
    var homepage = info.homepage
    var street = info.street
    var city = info.city
    var zip = info.zip
    var country = info.country
    var byear = info.byear
    var bmonth = info.bmonth
    var bday = info.bday

    var twitter = info.twitter
    var facebook = info.facebook
    var linkedin = info.linkedin
    var snapchat = info.snapchat
    var instagram = info.instagram

    var vCard = require('vcf')

    const vcardContent = vcard.generate({
  name: {
    familyName: 'Doe',
    givenName: 'John',
    middleName: 'Philip',
    prefix: 'Dr.',
    suffix: 'Jr.',
  },
  formattedNames: [{
    text: 'Mr. Johny',
  }],
  nicknames: [{
    text: 'Phil',
  }],
  extraName: {
    maidenName: 'MaidenName',
    phoneticFirstName: 'PhoneticFirstName',
    phoneticMiddleName: 'PhoneticMiddleName',
    phoneticLastName: 'PhoneticLastName',

    pronunciationFirstName: 'PronunciationFirstName',
    pronunciationMiddleName: 'PronunciationMiddleName',
    pronunciationLastName: 'PronunciationLastName',
  },

  works: [{
    organization: 'My Company, Inc.',
    title: 'CEO',
    role: 'Executive',
  }],
  emails: [{
    type: 'work',
    text: 'john@mycompany.com',
  }, {
    type: 'home',
    text: 'johndoe@example.com',
  }],
  phones: [{
    type: 'work',
    text: '1 (234) 567-8901',
  }, {
    text: '(123) 123-1234',
  }, {
    uri: 'tel:1234567890',
  }],
  addresses: [{
    type: 'work',
    street: '123 Forbes Ave, Apt 1',
    locality: 'San Francisco',
    region: 'CA',
    code: '12345',
    country: 'USA',
  }, {
    type: 'home',
    street: '456 Home St',
    locality: 'Homeland',
    region: 'CA',
    code: '23456',
    country: 'USA',
  }],
  socialProfiles: [{
    type: 'facebook',
    uri: 'http://www.facebook.com/johndoe',
  }, {
    type: 'twitter',
    user: 'johnie',
  }],
  urls: [{
    type: 'internet',
    uri: 'http://www.mycompany.com',
  }, {
    type: 'personal',
    uri: 'http://www.johndoe.com',
  }],

  photos: [{
    type: 'work',
    uri: 'https://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg',
  }, {
    type: 'home',
    dataUri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
  }],

  birthday: {
    year: 2000,
    month: 1,
    day: 31,
  },
  gender: {
    sex: 'male',
  },
  notes: [{
    text: 'John Doe has a long and varied history, being documented on more police files that anyone else.\nReports of his death are alas numerous.',
  }, {
    text: 'Another note.',
  }],
});

        /*

        BEGIN:VCARD
        VERSION:4.0
        PRODID:-//BBros.us llc//bvCard.com//EN
        N:lsat;first;m;;
        FN:first m lsat
        EMAIL:dicenzoryan@gmail.com
        ORG:google
        TEL:9492125623
        URL;type=pref:http://ryandicenzo.com
        ADR:;2412 EL mar Drive;;Mission vIejo;CA;92691;USA
        URL:https://www.linkedin.com/ryandicenzo
        URL:https://www.facebook.com/ryandicenzo
        URL:https://www.plus.google.com/ryandicenzo
        URL:https://www.twitter.com/ryandicenzo
        END:VCARD
        */



    return (

      console.log(vcardContent)


      <View>
        <Header
          centerComponent={{ text: 'CONNEC', style: { color: '#fff' } }}
        />
        <View style={{alignItems: "center"}}>
          <QRCode
            value={vcardContent}
            size={300}
            bgColor='black'
            fgColor='white'
          />
        </View>
        <View>
          <Text>{this.props.profile.name}</Text>
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#000',
//   },
//   bottomBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     padding: 15,
//     flexDirection: 'row',
//   },
//   url: {
//     flex: 1,
//   },
//   urlText: {
//     color: '#fff',
//     fontSize: 20,
//   },
//   cancelButton: {
//     marginLeft: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   cancelButtonText: {
//     color: 'rgba(255,255,255,0.8)',
//     fontSize: 18,
//   },
// });

export default connect(
  state => state
)(Connec);
