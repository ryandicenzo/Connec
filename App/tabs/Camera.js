import React from 'react';
import { Dimensions, Text, View, StatusBar, StyleSheet, Share } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class App extends React.Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null
  };

  // On mounting, request for camera permission.
  componentDidMount() {
    this._requestCameraPermission();
  }

  // Handle camera permission
  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  // Handle new barcode read.
  _handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl && result.data.slice(0,11) === 'BEGIN:VCARD') {
      this.setState({ lastScannedUrl: result.data });
      this._handleNewCode(result.data);
      }
    }

  render() {
    return (

      // Permission GUI
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

  // Handle new vCard String
  _handleNewCode = (vstring) => {
    FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'savedfile.vcf', vstring);
    const result = Share.share({
      url:
      FileSystem.documentDirectory + 'savedfile.vcf', title: 'share',
      excludedActivityTypes:
       ["com.apple.UIKit.activity.SaveToCameraRoll",
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
    }).then(({action, activityType}) => {
      // Handle Share Dismissed
    if(action === Share.dismissedAction)
      this.setState({ lastScannedUrl: '' }); // Set last scan to empty string, so user can scan again.

    });
  };

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

// Check if scan is new
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
  label: {
    fontSize: 16,
    color: '#2E728F',
    fontWeight: 'bold'
  },
});
