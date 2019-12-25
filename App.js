import React, { Component } from 'react';
import {View,Text} from 'react-native';
import Home from './Components/Home';
import WelCome from './Components/Welcome';

class App extends Component {
  render() {
    return (
      <View>
<Home/>
<WelCome/>
      </View>
    );
  }
}

export default App;