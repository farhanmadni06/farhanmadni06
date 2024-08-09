import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Home2 = () => {

    const navigation= useNavigation()




    const [data, setdata] = useState([]);


    useEffect(() => {
        allproduct()
    }, [])

    const allproduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products`)
        const json = await response.json();
        setdata(json)
    }

    return (
        <View
            style={{
                flex: 1,
                margin: 20,

            }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <Entypo
                    name='menu'
                    size={40}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Image style={{ height: 40, width: 50 }} source={require('../img/logo.png')} />
                    <Text>Stylish</Text>
                </View>

                <Image source={require('../img/girl.png')} />
            </View>


            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'

            }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 10

                    }}
                >
                    <Feather
                        style={{ marginLeft: 10, }}

                        name='search'
                        size={25}
                    />

                    <TextInput
                        style={{
                            width: '80%'
                        }}
                        placeholder='Search any Product..'
                    />
                </View>

                <FontAwesome
                    style={{ marginRight: 20, }}
                    name='microphone'
                    size={25}
                />
            </View>


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
                data={data}
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


        </View>
    )
}

export default Home2

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
        width: '50%',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'red'


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
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',


    },
    container: {
        flex: 1,
        width: '60%',
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 5,
        marginBottom: 10,
        gap: 10,
        padding: 15,
        shadowOpacity: 10,
        elevation: 5,


    },
    smallcontainer: {
        backgroundColor: '#FD6E87',
        width: '100%',
        height: '5%',
        borderRadius: 10,
        padding: 10,
        gap: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'

    }
})




