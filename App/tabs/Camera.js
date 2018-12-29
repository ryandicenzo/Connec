import React, { Component } from 'react';
import { Alert, Linking, Dimensions, LayoutAnimation, Text, View, StatusBar, StyleSheet, TouchableOpacity, Share } from 'react-native';
import { BarCodeScanner, Permissions, FileSystem, Contacts } from 'expo';

export default class App extends Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl && result.data.slice(0,11) === 'BEGIN:VCARD') {
      this.setState({ lastScannedUrl: result.data });
      this._handlePressUrl(result.data);
      }
    }


  render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null
          ? <Text>Requesting for camera permission</Text>
          : this.state.hasCameraPermission === false
              ? <Text style={{ color: '#fff' }}>
                  Camera permission is not granted
                </Text>
              : <BarCodeScanner
                  onBarCodeRead={this._handleBarCodeRead}
                  style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                  }}
                />}

        {this._maybeRenderUrl()}

        <StatusBar hidden />

        <View style={styles.bottomBar}>
          <Text style ={styles.label}>
          Scan a generated contact and press: Copy to Contacts.
          </Text>
        </View>

      </View>
    );
  }

  _handlePressUrl = (vstring) => {
    if (vstring.slice(0,11) === 'BEGIN:VCARD'){

      Expo.FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'savedfile.vcf', vstring);
      const result = Share.share({
            url:
            FileSystem.documentDirectory + 'savedfile.vcf', title: 'share',
            excludedActivityTypes:
             [ 'com.apple.UIKit.activity.SaveToCameraRoll',
          "com.apple.UIKit.activity.PostToFacebook",
          "com.apple.UIKit.activity.PostToTwitter",
          "com.apple.UIKit.activity.PostToWeibo",
          "com.apple.UIKit.activity.Message",
          "com.apple.UIKit.activity.Mail",
          "com.apple.UIKit.activity.Print",
          "com.apple.UIKit.activity.CopyToPasteboard",
          //"com.apple.UIKit.activity.AssignToContact",
          "com.apple.UIKit.activity.SaveToCameraRoll",
          "com.apple.UIKit.activity.AddToReadingList",
          "com.apple.UIKit.activity.PostToFlickr",
          "com.apple.UIKit.activity.PostToVimeo",
          "com.apple.UIKit.activity.PostToTencentWeibo",
          "com.apple.UIKit.activity.AirDrop",
          "com.apple.UIKit.activity.OpenInIBooks",
          "com.apple.UIKit.activity.MarkupAsPDF",
          "com.apple.reminders.RemindersEditorExtension", //Reminders
          "com.apple.mobilenotes.SharingExtension", // Notes
          "com.apple.mobileslideshow.StreamShareService", // iCloud Photo Sharing - This also does nothing :{

          ]
            })

      }
  };

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

  _maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
  },
  url: {
    flex: 1,
  },
  urlText: {
    color: '#fff',
    fontSize: 20,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
  label: {
    fontSize: 16,
    color: '#6CB4D2',
    fontWeight: 'bold'
  },
});
