import React, { Component } from 'react';
import { View, Image } from 'react-native';


export default class ConnecHeader extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Image
                style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    width: undefined,
                    height: undefined,
                }}
                source={require('../assets/splash.png')}
                resizeMode="stretch"
                />
  
            </View>
        )
    }
}
