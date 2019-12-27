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
} from 'react-native';


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
              width: 405,
              alignItems: 'center',
              justifyContent: 'flex-end',
              
              // borderBottomLeftRadius: 20,
              // borderRadius: 20,
            }} imageStyle={{ borderBottomLeftRadius: 50,borderBottomRightRadius: 50}}>
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
            <TouchableHighlight>
              <View style={styles.CircleShapeView}>
                <Image
                  source={require('../assets/user.png')}
                  style={{height: 40, width: 40, paddingTop: 30}}></Image>
              </View>
            </TouchableHighlight>
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
            <TouchableHighlight>
              <View style={styles.CircleShapeView}>
                <Image
                  source={require('../assets/register.png')}
                  style={{height: 40, width: 40, paddingTop: 30}}></Image>
              </View>
            </TouchableHighlight>

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
              justifyContent: 'space-around',
            }}>
            <TouchableHighlight>
              <View style={styles.CircleShapeView}>
                <Image
                  source={require('../assets/beach-umbrella-and-hammock.png')}
                  style={{height: 40, width: 40, paddingTop: 30}}></Image>
              </View>
            </TouchableHighlight>
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
            <TouchableHighlight>
              <View style={styles.CircleShapeView}>
                <Image
                  source={require('../assets/kite.png')}
                  style={{height: 40, width: 40, paddingTop: 30}}></Image>
              </View>
            </TouchableHighlight>
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
            backgroundColor: '#AB7362',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            alignItems: 'center',
            zIndex: 99999,
          }}>
          <Image
            source={require('../assets/place.png')}
            style={{height: 40, width: 60, marginBottom: 10,position:'absolute',top:-20}}></Image>
          {/* <View style={styles.footer}>
            <Text>@2019 info@palmyrah.com</Text>
          </View> */}
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
    width: 200,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#AB7362',
    backgroundColor: '#AB7362',
  },
  buttonText: {
    fontSize: 20,
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
  CircleShapeView: {
    width: 50,
    height: 50,
    borderRadius: 60 / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    fontSize: 12,
    color: 'white',
    paddingBottom: 10,
    alignItems:"center",
    color: 'white',
  },
});
