import React from 'react';
import { Text, View } from 'react-native';
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Header } from 'react-native-elements';
// Create QR code for a string
import QRCode from 'react-native-qrcode';
// Connect components to Redux
import { connect } from 'react-redux';

// Connec Tab: QR code display
class Connec extends React.Component {
  render() {
    console.log(this.props)
    console.log(this.props.profile.name)
    userinfo = {
      "name": this.props.profile.name,
      "title": "Software Engineer",
      "facebook": "http://www.facebook.com/ryandicenzo"
    }
    var qrstring = 'BEGIN:VCARD\r\n' +
                   'FN:Forrest Gump\r\n' +
                   'N:Gump;Forrest;;Mr.;\r\n' +
                   'TEL;TYPE=HOME:78884545247\r\n' +
                   'END:VCARD';
    
    info = this.props.profile

    var fname = info.fname
    var lname = info.lname
    var company = info.company
    var hphone = info.hphone
    var wphone = info.wphone
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
                   'N:' + fname + ';' + lname+ ';;\r\n' +
                   'ORG:' + company + '\r\n' +
                   'TEL;TYPE=HOME:'+hphone+ '\r\n' +
                   'TEL;TYPE=WORK:'+wphone+'\r\n' +
                   'EMAIL:'+ homeemail + '\r\n' +
                   'EMAIL:'+ workemail + '\r\n' +
                   'URL;TYPE=pref:'+instagram+'\r\n'+
                   'URL;TYPE=pref:'+twitter+'\r\n'+
                   'URL;TYPE=pref:'+facebook+'\r\n'+
                   'URL;TYPE=pref:'+linkedin+'\r\n'+
                   'URL;TYPE=pref:'+snapchat+'\r\n' +
                   'END:VCARD';
    

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
          <Text>{this.props.profile.fname}</Text>
          <Text>{this.props.profile.hphone}</Text>
          <Text>{this.props.profile.facebook}</Text>
        </View>
      </View>
    );
  }
}

// Connect component to Redux store
export default connect(state => state)(Connec);
