import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  Alert
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

// const [value, onChangeText] = React.useState('Useless Placeholder');

export default class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          UserName: '',
          password: '',
        };
      }
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={styles.container}>
        <View style={{flex: 1, paddingTop: 30, alignItems: 'center'}}>
          <Image
            source={require('../assets/palmyrah.png')}
            style={{height: 70, width: 100}}></Image>
          <Text style={styles.headerText1}>PALMYRAH HOUSE</Text>
          <Text style={styles.headerText2}>|   Tourist Guide   |</Text>
          <Text>
            {''}
            {''}
            {''}
          </Text>
          <Text style={styles.headerText1}>WELCOME BACK!</Text>
          <Text>
            {''}
            {''}
            {''}
          </Text>
          <Image
            source={require('../assets/sun-bath.png')}
            style={{height: 100, width: 100}}></Image>
          <Text style={styles.title}>UserName</Text>
          <TextInput
            style={{
              height: 25,
              borderColor: 'white',
              width: 150,
              backgroundColor: 'white',
              
            }}
            // onChangeText={text => onChangeText(text)} value={value}
          />
          <Text style={styles.title}>Password</Text>
          <TextInput
            style={{
              height: 25,
              borderColor: 'white',
              width: 150,
              backgroundColor: 'white',
              shadowColor:10         
            }}
            // onChangeText={text => onChangeText(text)} value={value}
          />

          <Text
            style={{
              fontStyle: 'normal',
              fontSize: 15,
              textAlign: 'right',
              color: '#A13D2D',
              marginLeft:100
              
            }}>
            forget password?
          </Text>
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
              style={styles.buttonSignup}
              underlayColor={'transparent'}
              onPress={() => {
                Alert.alert('Sign Up', "Please Sign Up"),
                  [{text: 'Okay'}];
              }}>
              <Text style={[styles.buttonTextSignup]}>
                Don't have account? SIGN UP
              </Text>
            </TouchableHighlight>
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
  headerText1: {
    fontSize: 20,
    marginTop: 15,
    fontFamily: 'Georgia',
    textAlign: 'center',
    color: '#A13D2D',
    // textShadowOffset: {width: 5, height: 4},
    textShadowRadius: 5,
  },
  headerText2: {
    fontSize: 16,
    marginTop: 15,
    fontFamily: 'Georgia',
    textAlign: 'center',
    color: '#A13D2D',
    textShadowRadius: 5,
  },
  title: {
    fontSize: 18,
    marginTop: 15,
    fontFamily: 'Georgia',
    color: '#A13D2D',
    alignItems: 'flex-start',
    marginRight:100,
    textShadowRadius: 5,
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
   buttonSignup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    // borderRadius: 15,
  },
  buttonTextSignup: {
    fontSize: 14,
    marginTop: 5,
    color:'#A13D2D'
  },
});
