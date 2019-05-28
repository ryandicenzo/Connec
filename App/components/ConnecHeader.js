import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { Constants, Font } from 'expo';



export default class ConnecHeader extends Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'comfortaa': require('.././assets/fonts/Comfortaa-Bold.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    render() {
        return (
            <View style={{paddingTop: Constants.statusBarHeight}}>
                <Header
                    centerComponent={
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            {
                                this.state.fontLoaded ? (
                                    <Text style={styles.headerText}>
                                        connec</Text>
                                ) : null
                            }
                        </View>
                    }
                    rightComponent={this.renderShare ? <Icon name='send' color='black' onPress={() => this.shareVCard()} /> : null}

                    backgroundColor="#ffffff"
                />
            </View>
            
        )
    }
}

const styles = StyleSheet.create({

    headerText: { 
        fontFamily: 'comfortaa',
        fontSize: 48,
        color: '#2B95A3',
        fontWeight: '700'
    },
});