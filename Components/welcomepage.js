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
  TouchableOpacity,
} from 'react-native';
import Footer from './footer';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class WelcomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center',}}>
          <ImageBackground
            source={require('../assets/lake.jpg')}
            style={{height: 368, width: 400,alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.headerText3}>PALMYARAH HOUSE</Text>
            <Text style={styles.headerText2}>Tourist Guide</Text>
          </ImageBackground>
        </View>
        <View
          style={{
            height: 380,
            width: 410,
            backgroundColor: 'white',
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
          }}>
          <Text style={styles.headerText1}>Welcome To Palmyrah House</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={styles.title}>Already member?</Text>
            <Text style={styles.title}>Haven't Experienced yet?</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableHighlight
              style={styles.button}
              underlayColor="transparent"
              onPress={() => {
                Alert.alert('Welcome Palmarah', 'Log in'), [{text: 'Okay'}];
              }}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.button}
              underlayColor="transparent"
              onPress={() => {
                Alert.alert('Welcome Palmarah', 'Log in'), [{text: 'Okay'}];
              }}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableHighlight>
          </View>
          <Text>
            {''}
            {''}
            {''}
            {''}
          </Text>
          <Text>
            {''}
            {''}
            {''}
            {''}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../assets/beach-umbrella-and-hammock.png')}
                style={{height: 40, width: 40}}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/kite.png')}
                style={{height: 40, width: 40}}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/place.png')}
                style={{height: 40, width: 40}}></Image>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={styles.title}>Find</Text>
            <Text style={styles.title}>Enjoy</Text>
            <Text style={styles.title}>Explore</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={styles.title}>Resorts</Text>
            <Text style={styles.title}>Kitesurfing</Text>
            <Text style={styles.title}>Map</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
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
  headerText1: {
    fontSize: 20,
    marginTop: 15,
    fontFamily: 'Georgia',
    textAlign: 'center',
    color: '#A13D2D',
    // textShadowOffset: {width: 5, height: 4},
    textShadowRadius: 2,
  },
  title: {
    fontSize: 18,
    marginTop: 15,
    fontFamily: 'Georgia',
    color: '#A13D2D',
    // alignItems: 'flex-start',
    // marginRight:100,
    textShadowRadius: 2,
  },
  headerText2: {
    fontSize: 16,
    marginTop: 15,
    fontFamily: 'Georgia',
    textAlign: 'center',
    color: 'white',
    textShadowRadius: 5,  
  },
  headerText3: {
    fontSize: 25,
    marginTop: 15,
    fontFamily: 'Georgia',
    textAlign: 'center',
    color: 'white',
    textShadowRadius: 5,  
  },
});
