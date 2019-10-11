import React from 'react';
import { Dimensions, Text, View, StatusBar, StyleSheet, Share } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class App extends React.Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: false,
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
          ? <Text>Requesting camera permission</Text>
          : this.state.hasCameraPermission === false
              ? <Text style={{ color: '#fff' }}>
                  Camera permission is not granted
                </Text>
              : <BarCodeScanner
                  onBarCodeScanned={this._handleBarCodeRead}
                  style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                  }}
                />}

        {this._maybeRenderUrl()}

        <StatusBar hidden />

        <View style={styles.bottomBar}>
          <Text style ={styles.label}>
          Scan a QR code and press: Copy to Contacts.
          </Text>
        </View>

      </View>
    );
  }

  // Handle new vCard String
  _handleNewCode = (vstring) => {
    FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'savedfile.vcf', vstring);
    const result = Share.share({
      url: FileSystem.documentDirectory + 'savedfile.vcf'
    }).then(({action, activityType}) => {
      this.setState({ lastScannedUrl: false }); // Set last scan to false, so user can scan again.
    });
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