import React, { Component } from 'react';
import {View} from 'react-native';
import Home from './Components/Home';
import Welcome from './Components/Welcome';

class App extends Component {
  render() {
    return (
      <View>
{/* <Home/> */}
<Welcome/>
      </View>
    );
  }
}

export default App;