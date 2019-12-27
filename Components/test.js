import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  Text,
  Alert,
  TouchableHighlight,
  Entypo
} from 'react-native';


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Test extends Component {
  render() {
    return (
      <View
  style={{
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
  }}
>
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 100,
      borderRadius: 8,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      elevation: 7,
      overflow: 'visible',
    }}
  >
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'absolute',
        // top: -25,
        width: 50,
        height: 50,
        // borderRadius: 50 / 2,
        // backgroundColor: 'white',
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 7,
      }}
    >
      <Image
                  source={require('../assets/kite.png')}
                  style={{height: 40, width: 40, paddingTop: 30}}></Image>
    </View>
    <Text
      style={{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
      }}
    >
      YAS!
    </Text>
  </View>
</View>
    );
  }
}