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


    var qrstring = 'BEGIN:VCARD\r\n' +
                  'FN:' +
                  'N:' + lname + ';' + fname+ ';;'\r\n' +
                  'ORG:' + company + '\r\n' +
                  'TEL;TYPE=HOME:'+hphone+ '\r\n' +
                  'TEL;TYPE=WORK:'+wphone+'\r\n' +
                  'EMAIL:'+ homeemail + '\r\n' +
                  'EMAIL:'+ workemail + '\r\n' +
                  'URL;TYPE=pref:'+instagram+'\r\n'+
                  'URL;TYPE=pref:'+twitter+'\r\n'+
                  'URL;TYPE=pref:'+facebook+'\r\n'+
                  'URL;TYPE=pref:'+linkedin+'\r\n'+
                  'URL;TYPE=pref:'+snapchat+'\r\n'
                  'END:VCARD';

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
      <View>
        <Header
          centerComponent={{ text: 'CONNEC', style: { color: '#fff' } }}
        />
        <View style={{alignItems: "center"}}>
          <QRCode
            value={qrstring}
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
