import React, { Component } from 'react';
import {View} from 'react-native';
// import Home from './Components/home';
// import Welcome from './Components/welcome';
import WelcomePage from './Components/welcomepage';

class App extends Component {
  render() {
    return (
      <View>
{/* <Home/> */}
{/* <Welcome/> */}
<WelcomePage/>
      </View>
    );
  }
}

export default App;