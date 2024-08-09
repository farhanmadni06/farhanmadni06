import { View, Text, StyleSheet, Image, TextInput, FlatList, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';





const Home1 = () => {
    const navigation= useNavigation()


    const Images = [
        {
            img: require('../img/feature1.png')
        },
        {
            img: require('../img/feature2.png')
        }, {
            img: require('../img/feature3.png')
        },
        {
            img: require('../img/feature4.png')
        },
        {
            img: require('../img/feature5.png')
        },
    ]

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

            }}
        >


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
                >All Featured</Text>

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

            <View>
                <FlatList

                    data={Images}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ marginLeft: 20 }}>
                                <Image source={item.img} />
                            </View>

                        )
                    }}
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ gap: 10 }}>

                <ImageBackground style=
                    {{
                        flex: 0.2,
                        padding: 20,
                        marginTop: 20,
                        borderRadius: 10,
                    }}
                    source={require('../img/ads.png')} >
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>50-40% OFF</Text>
                    <Text style={{ color: 'white' }}>Now in (product)</Text>
                    <Text style={{ color: 'white' }}>All colours</Text>

                    <TouchableOpacity style={{
                        borderColor: 'white',
                        borderWidth: 1,
                        width: '35%',
                        padding: 5,
                        borderRadius: 10,
                        alignItems: 'center',
                        marginTop: 10

                    }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, }}>Shop Now →	 </Text>
                    </TouchableOpacity>

                </ImageBackground>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Image source={require('../img/dots.png')} />
                </View>

                <View
                    style={{
                        backgroundColor: '#4392F9',
                        width: '100%',
                        height: '5%',
                        borderRadius: 10,
                        padding: 10,
                        gap: 10,
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between'

                    }}
                >
                    <View>
                        <Text style={{ color: 'white', fontSize: 18, }}>Deal of the Day</Text>
                        <Text style={{ color: 'white', fontSize: 15, }}>⏰ 22h 55m 20s remaining </Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            borderColor: 'white',
                            borderWidth: 1,
                            width: '25%',
                            height: 40,
                            borderRadius: 10,
                            alignItems: 'center',
                            marginTop: 10,
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>
                            View all →
                        </Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}

                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={styles.container}>
                                <Image style={{ height: 150, width: 200 }} source={{ uri: item.image }} />
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>{item.category}</Text>
                                <Text>₹{item.price}</Text>
                                <Text style={{ color: '#FE735C' }}>40%Off</Text>
                                <Text>⭐️⭐️⭐️⭐️⭐️     56890</Text>

                            </View>

                        )
                    }}
                />


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style source={require('../img/bor.png')} />
                        <Image source={require('../img/glee.png')} />
                        <Image source={require('../img/shoe.png')} />

                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                        <Text style={{ color: 'black', fontSize: 23, }}>Flat and Heels</Text>
                        <Text>Stand a chance to get rewarded</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ color: 'white' }}>Visit now → </Text>
                        </TouchableOpacity>
                    </View>

                </View>




                <View
                    style={styles.smallcontainer}
                >
                    <View>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Trending Products </Text>
                        <Text style={{ color: 'white', fontSize: 15, }}>🗓 Last Date 29/02/22 </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.button2}
                    >
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>
                            View all →
                        </Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}

                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={styles.container}>
                                <Image style={{ height: 150, width: 200 }} source={{ uri: item.image }} />
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>{item.category}</Text>
                                <Text>₹{item.price}</Text>
                                <Text style={{ color: '#FE735C' }}>40%Off</Text>
                                <Text>⭐️⭐️⭐️⭐️⭐️     56890</Text>

                            </View>

                        )
                    }}
                />

                <View
                    style={{ marginTop: 20 }}
                >
                    <Image style={{ width: 400, borderRadius: 10 }} source={require('../img/sale.png')} />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontWeight: 'normal', color: 'black', fontSize: 25, }}>New Arrivals </Text>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <Text style={{ fontWeight: 'normal', fontSize: 18, }}>Summer’ 25 Collections</Text>
                    <TouchableOpacity style={{
                        backgroundColor: '#F83758',
                        width: '25%',
                        height: 40,
                        borderRadius: 10,
                        alignItems: 'center',
                        marginTop: 10,
                        justifyContent: 'center'
                    }}>
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', }}> View all →</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: 'black', fontSize: 30, marginBottom: 10 }}>Sponserd</Text>
                    <Image style={{ width: 430, height: 380, borderRadius: 10 }} source={require('../img/50off.png')} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 25, marginTop: 10, fontWeight: 'bold', alignItems: 'center' }}>up to 50% Off </Text>
                        <Image source={require('../img/leftarrow.png')} />

                    </View>

                </View>



            </ScrollView >

            


        </View >
    )
}




export default Home1



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
        backgroundColor: '#E2E2E2',
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 5,
        marginBottom: 10,
        gap: 10,
        padding: 5,
        shadowOpacity: 10,
        elevation: 5

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




