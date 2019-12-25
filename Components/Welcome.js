import React, { Component } from 'react';
import {View,StyleSheet,Dimensions,Image,Text,Button,TouchableHighlight} from 'react-native';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
            <View style={{flex: 1, alignItems: 'center'}}>
            <Image
            source={require('../assets/lake.jpg')}
            style={{height: 250, width: 400, borderBottomLeftRadius:25, borderBottomRightRadius:25}}></Image>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableHighlight
            style={styles.button}
            underlayColor="transparent"
            onPress={() => {
                Alert.alert('Welcome Palmarah', "Log in"),
                  [{text: 'Okay'}];
              }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor="transparent"
            onPress={() => {
                Alert.alert('Welcome Palmarah', "Log in"),
                  [{text: 'Okay'}];
              }}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor="transparent"
            onPress={() => {
                Alert.alert('Welcome Palmarah', "Log in"),
                  [{text: 'Okay'}];
              }}>
            <Text style={styles.buttonText}>Resort</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor="transparent"
            onPress={() => {
                Alert.alert('Welcome Palmarah', "Log in"),
                  [{text: 'Okay'}];
              }}>
            <Text style={styles.buttonText}>Kite Surfing</Text>
          </TouchableHighlight>
            </View>
            <View style={{height: 80, backgroundColor:'#A13D2D' ,borderTopLeftRadius:25, borderTopRightRadius:25}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      height: deviceHeight,
      width: deviceWidth,
      backgroundColor: '#FCF4D4',
    },
    button: {
        height: 40,
        width: 150,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#A13D2D',
        backgroundColor: '#A13D2D',
      },
      buttonText: {
        fontSize: 20,
        // marginTop: 15,
        fontFamily: 'Georgia',
        textAlign: 'center',
        color: 'white',
        alignItems: 'flex-start',
        textShadowRadius: 5,
      },
})
