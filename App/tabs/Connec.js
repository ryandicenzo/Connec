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
          <Text>{this.props.profile.email}</Text>
          <Text>{this.props.profile.hello}</Text>
        </View>
      </View>
    );
  }
}

// Connect component to Redux store
export default connect(state => state)(Connec);
