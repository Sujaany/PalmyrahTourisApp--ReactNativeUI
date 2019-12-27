import React, { Component } from 'react';
import {View} from 'react-native';
import Home from './Components/home';
import Welcome from './Components/welcome';
import Test from './Components/test';
import Login from './Components/login';

class App extends Component {
  render() {
    return (
      <View>
{/* <Home/> */}
<Welcome/>
{/* <Test/> */}
{/* <Login/> */}
      </View>
    );
  }
}

export default App;