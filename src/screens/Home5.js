import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Home5 = () => {

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
        <View
            style={{
                flex: 1,
                margin: 20
            }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Image source={require('../img/left2.png')} />

                <View style={{ alignSelf: 'center', }}>
                    <Text style={{ fontSize: 25 }}>Checkout </Text>
                </View>
            </View>

            <View style={{ marginTop: 10, flexDirection: 'row', gap: 10 }}>
                <Image style={{ width: 30, height: 30, }} source={require('../img/maps.png')} />
                <Text style={{ fontWeight: 'normal', fontSize: 20, color: 'black' }}>Delivery Address</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%', marginTop: 20 }}>
                <Text style={{
                    fontWeight: 'normal',
                    fontSize: 17,
                    color: 'black',
                    marginTop: 10
                }}>Address :</Text>
                <Image style={{ width: 20, height: 20, }} source={require('../img/write.png')} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <View style={{ width: '60%' }}>
                    <Text>216 St Paul's Rd, London N1 2LL,  UK Contact :  +44-784232</Text>
                </View>
                <Image style={{ width: 30, height: 30, }} source={require('../img/+.png')} />

            </View>


            <Text style={{
                fontWeight: 'normal',
                fontSize: 22,
                color: 'black',
                marginTop: 10,
                marginTop: 20
            }}>Shopping List </Text>


            <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                numColumns={false}
                data={data2}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={styles.container}>
                            <Image style={{ height: 130, width: 120, resizeMode: 'contain', marginTop: 10, borderRadius: 10 }} source={{ uri: item.image }} />

                            <View >
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: 'black',
                                    marginTop: 20

                                }}>{item.category}</Text>
                                <Text style={{fontSize: 10,}}>{item.title}</Text>

                                <Text>₹{item.price}</Text>
                                <Text style={{ color: '#FE735C' }}>40%Off</Text>
                                <Text>⭐️⭐️⭐️⭐️⭐️     56890</Text>
                            </View>

                        </View>

                    )
                }}
            />







        </View>
    )
}

export default Home5



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
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10
    }

})






