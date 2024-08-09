import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const GetStart = () => {
    const navigation = useNavigation()

    return (
        <ImageBackground style={{ flex: 1 }} source={require('../img/cloths.png')}>

            <View style={{
                position: 'absolute',
                bottom: 0,
                alignSelf: 'center',
                marginBottom: 10,
                gap: 10,
            }}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 40,
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}
                >You want           Authentic, here            you go!</Text>

                <Text
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 20,
                    }}
                >Find it here, buy it now!</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('BottomNav')} style={styles.button} >
                    <Text
                        style={styles.buttontext}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default GetStart

const styles = StyleSheet.create({
    box1: {
        borderColor: '#A8A8A9',
        borderWidth: 1,
        paddingVertical: '1%',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    box2: {
        borderColor: '#A8A8A9',
        borderWidth: 1,
        paddingVertical: '1%',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    button: {
        paddingHorizontal: '33%',
        paddingVertical: 18,
        borderRadius: 10,
        backgroundColor: '#F83758',
        alignSelf: 'center',
        marginTop: '10%'
    },
    buttontext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',

    },
})