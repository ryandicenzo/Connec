import * as React from 'react';
import { Text, View, StyleSheet, Button, Share } from 'react-native';
import Constants from 'expo-constants';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        
        <View style={styles.bottomBar}>
          
          {/* Show if scanned */}
          {scanned && (<Button color="#2E728F" title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />)}
          
          {/* Show if not scanned */}
          {!scanned && (
            <Text style ={styles.label}>
              Hold Camera over QR Code
            </Text>
          )}
          
        </View>

      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    if (data.slice(0,11) === 'BEGIN:VCARD') {
      this.setState({ scanned: true });
      FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'contact.vcf');
      const result = Share.share({
        url: FileSystem.documentDirectory + 'contact.vcf'
      });
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
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    color: '#2E728F',
    padding: 8,
  },
});