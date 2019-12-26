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

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <ImageBackground
            source={require('../assets/lake.jpg')}
            style={{
              height: 280,
              width: 400,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Text style={styles.headerText3}>PALMYRAH HOUSE</Text>
            <Text style={styles.headerText2}>Tourist Guide</Text>
            <Text>{''}</Text>
          </ImageBackground>
        </View>

        <View style={{flex: 1, alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../assets/user.png')}
                style={{height: 40, width: 40, paddingTop: 30}}></Image>
            </TouchableOpacity>
            <TouchableHighlight
              style={styles.button}
              underlayColor="transparent"
              onPress={() => {
                Alert.alert('Welcome Palmarah', 'Log in'), [{text: 'Okay'}];
              }}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../assets/register.png')}
                style={{height: 40, width: 40, paddingTop: 30}}></Image>
            </TouchableOpacity>

            <TouchableHighlight
              style={styles.button}
              underlayColor="transparent"
              onPress={() => {
                Alert.alert('Welcome Palmarah', 'Log in'), [{text: 'Okay'}];
              }}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableHighlight>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../assets/beach-umbrella-and-hammock.png')}
                style={{height: 40, width: 40, paddingTop: 30}}></Image>
            </TouchableOpacity>
            <TouchableHighlight
              style={styles.button}
              underlayColor="transparent"
              onPress={() => {
                Alert.alert('Welcome Palmarah', 'Log in'), [{text: 'Okay'}];
              }}>
              <Text style={styles.buttonText}>Resort</Text>
            </TouchableHighlight>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../assets/kite.png')}
                style={{height: 40, width: 40, paddingTop: 30}}></Image>
            </TouchableOpacity>
            <TouchableHighlight
              style={styles.button}
              underlayColor="transparent"
              onPress={() => {
                Alert.alert('Welcome Palmarah', 'Log in'), [{text: 'Okay'}];
              }}>
              <Text style={styles.buttonText}>Kite Surfing</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View
          style={{
            height: 80,
            backgroundColor: '#A13D2D',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/place.png')}
            style={{height: 30, width: 40}}></Image>
          <Footer />
        </View>
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
  headerText2: {
    fontSize: 20,
    fontFamily: 'Georgia',
    textAlign: 'center',
    color: 'white',
    textShadowRadius: 5,
    paddingTop: 10,
  },
  headerText3: {
    fontSize: 25,
    fontFamily: 'Georgia',
    textAlign: 'center',
    color: 'white',
    textShadowRadius: 5,
  },
});
