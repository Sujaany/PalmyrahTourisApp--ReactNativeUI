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
  TextInput,
} from 'react-native';
import Footer from './footer';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
      }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
          <Image
            source={require('../assets/100092195.jpg')}
            style={{
              height: 250,
              width: 420,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}></Image>
        </View>
        <View
          style={{
            flex: 1.5,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Image
            source={require('../assets/sun-bath.png')}
            style={{
              height: 100,
              width: 100,
              justifyContent: 'flex-start',
            }}></Image>
          <Text style={styles.title}>UserName</Text>
        <TextInput
          style={{height: 25,
            height: 25,
            borderColor: 'white',
            width: 250,
            backgroundColor: 'white',
        }}
          placeholder="Sujaany Sun"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
          <Text style={styles.title}>Password</Text>
        <TextInput
          style={{height: 25,
            height: 25,
            borderColor: 'white',
            width: 250,
            backgroundColor: 'white',
        }}
          placeholder="**********"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

          <Text
            style={{
              fontStyle: 'normal',
              fontSize: 15,
              textAlign: 'right',
              color: '#A13D2D',
              marginLeft: 100,
              marginTop:8,
              textDecorationLine: 'underline',
            }}>
            forget password?
          </Text>
          <TouchableHighlight
            style={styles.button}
            underlayColor="transparent"
            onPress={() => {
              Alert.alert('Welcome Palmarah', 'Log in'), [{text: 'Okay'}];
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>

          
            <View 
            style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'center'}}>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 15,
                  fontFamily: 'Georgia',
                  color: '#A13D2D',
                  textShadowRadius: 2,
                }}>
                Don't have account?  
              </Text>
              <TouchableHighlight
            style={styles.buttonSignup}
            underlayColor={'transparent'}
            onPress={() => {
              Alert.alert('Sign Up', 'Please Sign Up'), [{text: 'Okay'}];
            }}>
              <Text style={[styles.buttonTextSignup]}>  Sign Up</Text>
              </TouchableHighlight>
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
    marginRight: 150,
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
  buttonSignup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    
    // borderRadius: 15,
  },
  buttonTextSignup: {
    fontSize: 14,
    marginTop: 5,
    color: 'black',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});
