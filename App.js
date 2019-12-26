import React, { Component } from 'react';
import {View} from 'react-native';
import Home from './Components/home';
import Welcome from './Components/welcome';
// import WelcomePage from './Components/welcomepage';
import Login from './Components/login';

class App extends Component {
  render() {
    return (
      <View>
{/* <Home/> */}
{/* <Welcome/> */}
{/* <WelcomePage/> */}
<Login/>
      </View>
    );
  }
}

export default App;