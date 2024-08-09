import { View, Text } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react'
import Home from '../Bottom screens/Home'
import Wishlist from '../Bottom screens/Wishlist'
import Shop from '../Bottom screens/Shop'
import Search from '../Bottom screens/Search'
import Setting from '../Bottom screens/Setting'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home1 from './Home1';
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';
import Home5 from './Home5';




const BottomNav = () => {
    const Bottom = createBottomTabNavigator()


    return (
        <Bottom.Navigator screenOptions={{headerShown:false}} >
            <Bottom.Screen name='Home' component={Home1} options={{
                tabBarIcon: () => {
                    return (

                        <View style={{ alignItems: 'center' }}>
                            <Entypo

                                name='home'
                                size={25}
                                color='red'

                            />
                        </View>


                    )
                }
            }} />
            <Bottom.Screen name='Wishlist' component={Home2} options={{
                tabBarIcon: () => {
                    return (
                        <View style={{ alignItems: 'center' }}>
                            <AntDesign
                                name='hearto'
                                size={25}
                                color='red'
                            />
                        </View>
                    )
                }
            }} />
            <Bottom.Screen name='Shop' component={Home3} options={{
                tabBarIcon: () => {
                    return (
                        <View style={{
                             alignItems: 'center', 
                             backgroundColor: 'red', 
                             width: '45%', 
                             paddingVertical: 5, 
                             borderRadius: 40,
                              alignSelf: 'center'
                               }}>
                            <Feather
                                name='shopping-cart'
                                size={25}
                                color='white' />
                        </View>
                    )
                }
            }} />


            <Bottom.Screen name='Search' component={Home4} options={{
                tabBarIcon: () => {
                    return (
                        <View style={{ alignItems: 'center' }}>
                            <AntDesign
                                name='search1'
                                size={25}
                            />
                        </View>
                    )
                }
            }} />
            <Bottom.Screen name='Setting' component={Home5} options={{
                tabBarIcon: () => {
                    return (
                        <View style={{ alignItems: 'center', }}>
                            <AntDesign
                                name='setting'
                                size={25}
                            />
                        </View>
                    )
                }
            }} />
        </Bottom.Navigator>
    )
}

export default BottomNav