import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppIntroSlier from 'react-native-app-intro-slider'
import { constants, style1 } from '../Utills/Style'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const Splash2 = () => {
    const navigation= useNavigation()


    const slides = [
        {
            title: 'Choose Products',
            subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            image: require('../img/Chooseproduct.png'),
            page: 1

        },
        {
            title: 'Make Payment',
            subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            image: require('../img/Sales.png'),
            page: 2

        },
        {
            title: 'Get Your Order',
            subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            image: require('../img/Shoppingbag.png'),
            page: 3

        },
    ]
    return (
        <AppIntroSlier
            data={slides}
            dotStyle={{ backgroundColor: 'lightgrey' }}
            activeDotStyle={{ height: 10, width: 40, backgroundColor: 'black' }}
            showNextButton={true}
            renderNextButton={() => {
                return (
                    <View>
                        <Text style={{ color: style1.color, fontWeight: style1.weight }}>Next</Text>
                    </View>
                )
            }}

            showPrevButton={true}
            renderPrevButton={() => {
                return (
                    <View>
                        <Text
                            style={{ fontWeight: style1.weight, }}
                        >
                            Prev
                        </Text>
                    </View>
                )
            }}

            renderItem={({ item }) => {
                return (
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10
                    }}>

                        <View style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            padding: 10,
                            alignItems: 'center',
                        }}>
                            <Text style={{ color: style1.primary, fontSize: style1.size }}>
                                {item.page}
                            </Text>
                        </View>

                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                padding: 10,
                                alignItems: 'center',

                            }}>
                            <TouchableOpacity 
                            onPress={()=> navigation.navigate('Login') }
                            >
                                <Text style={{
                                    color: style1.primary,
                                    fontVariant: style1.weight,
                                    fontSize: 20
                                }}>
                                    Skip
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <Image source={item.image} />

                        <Text
                            style={{
                                fontWeight: style1.weight,
                                color: 'black',
                                fontSize: 30,
                                alignSelf: 'center'
                            }}>{item.title}</Text>

                        <Text style={{
                            color: style1.primary,
                            fontSize: style1.size,
                            textAlign: 'center'
                        }}>{item.subtitle}</Text>
                    </View>
                )
            }}
        />
    )
}

export default Splash2

const styles = StyleSheet.create({})