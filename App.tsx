import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Splash1 from './src/screens/Splash1';
import Splash2 from './src/screens/Splash2';
import Create from './src/screens/Create';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import GetStart from './src/screens/GetStart';
import Home1 from './src/screens/Home1';
import Home2 from './src/screens/Home2';
import Home3 from './src/screens/Home3';
import Home4 from './src/screens/Home4';
import Home5 from './src/screens/Home5';
import Home6 from './src/screens/Home6';
import Home7 from './src/screens/Home7';
import BottomNav from './src/screens/BottomNav';
import GoogleMap from './src/Maps/GoogleMap';
import Maps from './src/screens/Maps';


// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// const Bottom = createBottomTabNavigator();


const App = () => {
  // const [splash, setsplash] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setsplash(false)
  //   }, 3000);
  // }, [])


  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
    //     {splash ?
    //       <Stack.Screen name="Splash1" component={Splash1} />
    //       :
    //       <>
    //         <Stack.Screen name="Splash2" component={Splash2} />
    //         <Stack.Screen name="Create" component={Create} />
    //         <Stack.Screen name="Login" component={Login} />
    //         <Stack.Screen name="Getstart" component={GetStart} />
    //         <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    //         <Stack.Screen name='BottomNav' component={BottomNav} />
    //         <Stack.Screen name="Home1" component={Home1} />
    //         <Stack.Screen name="Home2" component={Home2} />
    //       </>

    //     }

    //   </Stack.Navigator>
    // </NavigationContainer>
    <Maps/>
  )
}

export default App