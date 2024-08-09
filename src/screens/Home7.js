import { View, Text, Image, StyleSheet, FlatList, item, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { style1 } from '../Utills/Style';

const transparent = 'rgba(0,0,0,0.5)'

const Home7 = () => {

    const [openmodel, setopenmodel] = useState(false);

    function renderModal() {
        return (
            <Modal visible={openmodel}
                animationType='slide'
                transparent={true} >

                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        backgroundColor: transparent
                    }}>
                    <View
                        style={{
                            backgroundColor: 'white',
                            padding: 15,
                            width: '90%',
                            height: '25%',
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => setopenmodel(false)}
                            style={{backgroundColor:'#F83758',borderRadius: 40,padding:15,marginBottom:10}}>
                                <AntDesign
                                name='check'
                                size={50}
                                />


                        </TouchableOpacity>

                        <Text style={{
                            color: 'black',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>Payment done successfully.</Text>

                    </View>

                </View>
            </Modal>
        )
    }


    return (

        <View
            style={{
                flex: 1,
                margin: 20
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Image source={require('../img/left2.png')} />

                <View style={{ alignSelf: 'center', width: '90%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25 }}>
                        Checkout
                    </Text>
                </View>
            </View>

            <View style={{
                gap: 30,
                margin: 30
            }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={{ fontSize: 20, }}> Order</Text>
                    <Text style={{ fontSize: 17, color: 'black' }}>$  7,000</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={{ fontSize: 20, }}> Shipping</Text>
                    <Text style={{ fontSize: 17, color: 'black' }}>$  30</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={{ fontSize: 20, }}> Total</Text>
                    <Text style={{ fontSize: 17, color: 'black' }}>$  7,030</Text>
                </View>
            </View>

            <Text style={{ fontSize: 20, color: 'black' }}>Payment</Text>


            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: '10%',
                    borderRadius: 10,
                    padding: 10,
                    borderColor: 'red',
                    borderWidth: 1,
                    marginTop: 10,
                    alignItems: 'center'
                }}>
                <Image source={require('../img/visa.png')} />
                <TextInput
                    placeholder='*********2109'
                />

            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: '10%',
                    borderRadius: 10,
                    padding: 10,
                    marginTop: 10,
                    alignItems: 'center'
                }}>
                <Image source={require('../img/paypal.png')} />
                <TextInput
                    placeholder='*********2109'
                />

            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: '10%',
                    borderRadius: 10,
                    padding: 10,
                    marginTop: 10,
                    alignItems: 'center'
                }}>
                <Image source={require('../img/master.png')} />
                <TextInput
                    placeholder='*********2109'
                />

            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: '10%',
                    borderRadius: 10,
                    padding: 10,
                    marginTop: 10,
                    alignItems: 'center'
                }}>
                <Image source={require('../img/apple.png')} />
                <TextInput
                    placeholder='*********2109'
                />

            </View>

            <TouchableOpacity
                onPress={() => setopenmodel(true)}
                style={styles.button}
            >
                <Text style={{ fontSize: 20, color: 'white' }}>
                    Continue
                </Text>
            </TouchableOpacity>
            {renderModal()}


            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    position: 'absolute',
                    bottom: 0,
                    width: '100%'
                }}
            >

                <View style={{ alignItems: 'center' }}>
                    <Entypo

                        name='home'
                        size={25}
                    />
                    <Text>Home</Text>
                </View>


                <View style={{ alignItems: 'center' }}>
                    <AntDesign


                        name='hearto'
                        size={25}
                    />
                    <Text >wishlist</Text>
                </View>

                <View style={{ alignItems: 'center', width: 50, height: 50, backgroundColor: 'red', borderRadius: 30, padding: 10 }}>
                    <Feather

                        name='shopping-cart'
                        size={25}
                        color='white'
                    />
                </View>


                <View style={{ alignItems: 'center' }}>
                    <AntDesign

                        name='search1'
                        size={25}
                    />
                    <Text>search</Text>
                </View>


                <View style={{ alignItems: 'center', }}>
                    <AntDesign

                        name='setting'
                        size={25}
                    />
                    <Text>setting</Text>
                </View>

            </View>




        </View>
    )
}

export default Home7


const styles = StyleSheet.create({
    box1: {
        borderColor: '#A8A8A9',
        borderWidth: 1,
        paddingVertical: '1%',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
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
        paddingHorizontal: '10%',
        paddingVertical: '4%',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#F83758'


    },

    button2: {
        borderColor: 'white',
        borderWidth: 1,
        width: '25%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center'

    },

    buttontext: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',


    },
    container: {
        flex: 1,
        // backgroundColor: '#E2E2E2',
        borderRadius: 10,
        // marginTop: 20,
        marginLeft: 10,
        marginRight: 5,
        // marginBottom: 10,
        gap: 10,
        padding: 8,
        shadowOpacity: 10,
        shadowOffset: 2,
        elevation: 8,
        flexDirection: 'row'

    },
    smallcontainer: {
        backgroundColor: '#FD6E87',
        width: '100%',
        height: '10%',
        borderRadius: 10,
        padding: 10,
        gap: 10,
        marginTop: 10,

    },
    textinput: {
        paddingHorizontal: '10%',
        borderRadius: 10,
        padding: 10,
        borderColor: 'red',
        borderWidth: 1,
        marginTop: 10
    }

})






