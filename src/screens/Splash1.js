import { View, Text, Image } from 'react-native'
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const Splash1 = () => {
    const navigation= useNavigation()

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin:10

        }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                }}>
                <Image  source={require('../img/splashlogo.png')} />
                <Text style={{ color: '#F83758', fontSize: 45 }}>Stylish</Text>
            </View>
        </View>
    )
}

export default Splash1