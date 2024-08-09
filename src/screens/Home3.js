import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const Home3 = () => {

    const navigation= useNavigation()


    const [data, setdata] = useState([]);


    useEffect(() => {
        allproduct()
    }, [])

    const allproduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/1`)
        const json = await response.json();
        setdata(json)
    }



    const [data2, setdata2] = useState([]);


    useEffect(() => {
        products()
    }, [])

    const products = async () => {
        const response = await fetch(`https://fakestoreapi.com/products?limit=5`)
        const json = await response.json();
        setdata2(json)
    }



    return (
        <View style={{
            flex: 1,
            margin: 20,

        }}>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <AntDesign

                    name='left'
                    size={40} />
                <AntDesign
                    name='shoppingcart'
                    size={40}
                />
            </View>


            <ScrollView >

                <View>
                    <Image style={{ resizeMode: 'contain', width: 400, height: 300 }} source={{ uri: data.image }} />
                </View>

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Size: 7UK</Text>
                </View>


                <View style={{
                    flexDirection: 'row', gap: 10, paddingBottom: '2%', marginTop: 10

                }}>
                    <View style={{
                        width: '13%',
                        paddingBottom: '2%',
                        borderColor: 'red',
                        borderWidth: 1,
                        borderRadius: 6,
                        alignItems: 'center',

                    }}>
                        <Text style={{ color: '#FA7189' }}>6 UK</Text>
                    </View>

                    <View style={{
                        width: '13%',
                        paddingBottom: '2%',
                        borderColor: 'red',
                        borderWidth: 1,
                        borderRadius: 6,
                        backgroundColor: '#FA7189',
                        alignItems: 'center',


                    }}>
                        <Text style={{ color: 'white' }}>7 UK </Text>
                    </View>

                    <View style={{
                        width: '13%',
                        paddingBottom: '2%',
                        borderColor: 'red',
                        borderWidth: 1,
                        borderRadius: 6,
                        alignItems: 'center',

                    }}>
                        <Text style={{ color: '#FA7189' }}>8 UK</Text>


                    </View>

                    <View style={{
                        width: '13%',
                        paddingBottom: '2%',
                        borderColor: 'red',
                        borderWidth: 1,
                        borderRadius: 6,
                        alignItems: 'center',

                    }}>
                        <Text style={{ color: '#FA7189' }}>9 UK</Text>

                    </View>

                    <View style={{
                        width: '13%',
                        paddingBottom: '2%',
                        borderColor: 'red',
                        borderWidth: 1,
                        borderRadius: 6,
                        alignItems: 'center',


                    }}>
                        <Text style={{ color: '#FA7189' }}>10 UK</Text>

                    </View>
                </View>

                <View>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: 'black',

                        }}>{data.title}</Text>

                    <Text >{data.description}</Text>

                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: 'black',

                    }}>{data.category}</Text>

                    <Text>₹{data.price}</Text>
                    <Text style={{ color: '#FE735C' }}>40%Off</Text>
                    <Text>⭐️⭐️⭐️⭐️⭐️     56890</Text>

                </View>


                <View style={{
                    flexDirection: 'row', gap: 10, paddingBottom: '2%', marginTop: 10

                }}>
                    <View style={{
                        width: '30%',
                        paddingBottom: '2%',
                        borderColor: '#828282',
                        borderWidth: 1,
                        borderRadius: 6,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        flexDirection: 'row',



                    }}>
                        <Image source={require('../img/maps.png')} />

                        <Text style={{ color: 'black' }}>Nearest Store</Text>
                    </View>

                    <View style={{
                        width: '13%',
                        paddingBottom: '2%',
                        borderColor: '#828282',
                        borderWidth: 1,
                        borderRadius: 6,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'



                    }}>
                        <Image source={require('../img/lock.png')} />

                        <Text style={{ color: 'black' }}>VIP </Text>
                    </View>

                    <View style={{
                        width: '30%',
                        paddingBottom: '2%',
                        borderColor: '#828282',
                        borderWidth: 1,
                        borderRadius: 6,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly'

                    }}>
                        <Image source={require('../img/circlearow.png')} />
                        <Text style={{ color: 'black' }}>Return policy</Text>
                    </View>
                </View>


                <View>

                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{
                        borderColor: 'white',
                        borderWidth: 1,
                        width: '40%',
                        padding: 5,
                        borderRadius: 10,
                        alignItems: 'center',
                        marginTop: 10,
                        backgroundColor: '#3F92FF',
                        flexDirection: 'row'
                    }}>
                        <AntDesign

                            name='shoppingcart'
                            color='white'
                            size={40} />
                        <Text style={{ fontSize: 20, color: 'white' }}>  Go to cart</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={{
                            borderColor: 'white',
                            borderWidth: 1,
                            width: '40%',
                            padding: 5,
                            borderRadius: 10,
                            alignItems: 'center',
                            marginTop: 10,
                            backgroundColor: '#31B769',
                            flexDirection: 'row'
                        }}>
                        <MaterialIcons

                            name='touch-app'
                            color='white'
                            size={40} />
                        <Text style={{ fontSize: 20, color: 'white' }}>  Buy Now</Text>

                    </TouchableOpacity>
                </View>

                <View style={styles.smallcontainer}>
                    <Text style={{ fontSize: 20, color: 'white' }}>Delivery in </Text>
                    <Text style={styles.buttontext}>1 within Hour</Text>
                </View>



                <View
                    style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity
                        style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            width: '50%',
                            paddingVertical: '2%',
                            borderRadius: 10,
                            alignItems: 'center',
                            marginTop: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly'
                        }}>
                        <AntDesign


                            name='eye'
                            size={30} />
                        <Text>View Similar</Text>

                    </TouchableOpacity>


                    <TouchableOpacity
                        style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            width: '45%',
                            paddingVertical: '2%',
                            borderRadius: 10,
                            alignItems: 'center',
                            marginTop: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly'
                        }}>
                        <Entypo
                            name='add-to-list'
                            size={30} />
                        <Text>Add to Compare</Text>

                    </TouchableOpacity>
                </View>


                <Text style={{ fontSize: 20, color: 'black', marginTop: 10 }}>Similar To</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}
                    >52,082+ Iteams</Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 10
                        }}
                    >
                        <Text>sort</Text>
                        <FontAwesome
                            name='sort'
                            size={20}
                            color='black'

                        />
                    </View>


                    <View
                        style={{
                            flexDirection: 'row'
                        }} >
                        <Text>sort</Text>
                        <AntDesign
                            name='filter'
                            size={20}
                            color='black'
                        />
                    </View>
                </View>

                <FlatList
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                    data={data2}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={styles.container}>
                                <Image style={{ height: 150, width: 160, resizeMode: 'contain', borderRadius: 10 }} source={{ uri: item.image }} />
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: 'black',

                                }}>{item.category}</Text>
                                <Text>{item.title}</Text>

                                <Text>₹{item.price}</Text>
                                <Text style={{ color: '#FE735C' }}>40%Off</Text>
                                <Text>⭐️⭐️⭐️⭐️⭐️     56890</Text>

                            </View>

                        )
                    }}
                />

            </ScrollView>
            
        </View>
    )
}

export default Home3


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
        borderColor: 'white',
        borderWidth: 1,
        width: '40%',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#3F92FF'


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
        marginBottom: 10,
        gap: 10,
        padding: 15,
        shadowOpacity: 10,
        shadowOffset:2,
        elevation: 8

    },
    smallcontainer: {
        backgroundColor: '#FD6E87',
        width: '100%',
        height: '10%',
        borderRadius: 10,
        padding: 10,
        gap: 10,
        marginTop: 10,

    }
})




