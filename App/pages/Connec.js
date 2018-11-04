import React from 'react';
import { StyleSheet, Text, TextInput, View, Alert, Linking, Dimensions, LayoutAnimation, StatusBar, TouchableOpacity } from 'react-native';
// Components: https://react-native-training.github.io/react-native-elements/
// Icons: https://material.io/tools/icons/
// Header: https://react-native-training.github.io/react-native-elements/docs/0.19.1/header.html
import { Button, ButtonGroup, Icon, Header, List, ListItem, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import QRCode from 'react-native-qrcode';
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
    var qrstring = JSON.stringify(userinfo)

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

export default connect(state => state)(Connec);
