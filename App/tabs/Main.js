import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { LinearGradient } from 'expo-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-community/async-storage';

import { connect } from 'react-redux';

import { Nav } from '../Nav.js'
import Splash from '../components/Splash.js'

const winWidth = Dimensions.get('window').width
const winHeight = Dimensions.get('window').height


const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    width: winWidth * .6,
    height: winWidth * .6,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 45,
    fontSize: 25
  },
  title: {
    fontSize: 40,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
  }
});


const slides = [
  {
    key: '1',
    title: 'Let’s get you started!',
    text: 'Enter the contact info you wish to share on the profile tab. Tap the sliders to enable or disable a specific field.',
    image: require('.././assets/tutorial/1.png'),
    colors: ['#6CB4D2', '#6CB4D2'],
  },
  {
    key: '2',
    title: 'Are you ready to Connec?',
    text: 'Tap the Connec icon to generate your own personal QR Code.',
    image: require('.././assets/tutorial/2.png'),
    colors: ['#FF9406', '#FF9406'],
  },
  {
    key: '3',
    title: 'Scan away!',
    text: 'Have a friend or colleague scan your QR Code with the iPhone camera app. Certain non-Apple devices may require a QR scanner to work with Connec.',
    image: require('.././assets/tutorial/3.png'),
    colors: ['#2E728F', '#2E728F'],
  }
];


export class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { loaded: false, showRealApp: false, savedContact: false };
  }

  componentDidMount = () => {
    //checks if this is the initial launch of the app
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        this.setState({showRealApp: 'false'});
      }
      else {
        this.setState({showRealApp: 'true'});
        this.setState({savedContact : 'true'});
      }
    });
    this.setState({loaded: 'true'});
  }

  _renderItem = props => (
    <LinearGradient
      style={[styles.mainContent, {
        width: props.width,
        height: props.height,
      }]}
      colors={props.colors}
      start={{x: 0, y: .1}} end={{x: .1, y: 1}}
    >
      <View style={styles.mainContent}>
        <Text style={styles.title}>{props.title}</Text>
        <Image style={styles.image} source={props.image} />
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </LinearGradient>
  );

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: 'true' });
  }

  render() {

    if (this.state.loaded == 'true') {
        if (this.state.showRealApp == 'true') {
          return <Nav contact={this.state.savedContact}/>
      } else {
          return (
              <View style={{position: 'absolute'}}>
                  <AppIntroSlider
                  slides={slides}
                  renderItem={this._renderItem}
                  bottomButton
                  onDone={this._onDone}
                  />
              </View>
          );
      }
    } else {
      return <Splash></Splash> ;
    }
  }
}


// Connect component to Redux store
export default connect(state => state)(Main);
