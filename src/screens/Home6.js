import { View, Text, Image, StyleSheet, FlatList, item, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { style1 } from '../Utills/Style';

const Home6 = () => {

    const [data, setdata] = useState([]);


    useEffect(() => {
        allproduct()
    }, [])

    const allproduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/1`)
        const json = await response.json();
        setdata(json)
    }




    return (
        <View style={{
            flex: 1,
            margin: 20
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Image source={require('../img/left2.png')} />

                <View style={{ alignSelf: 'center', }}>
                    <Text style={{ fontSize: 25 }}>
                        Checkout
                    </Text>
                </View>
                <Image source={require('../img/heart.png')} />
            </View>




            <View style={{ flexDirection: 'row', gap: 20, marginTop: 20 }}>
                <View>
                    <Image style={{ height: 150, width: 150, resizeMode: 'contain', borderRadius: 10 }} source={require('../img/g.png')} />
                </View>

                <View style={{ gap: 5 }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>Women’s Casual Wear</Text>
                    <Text style={{ fontSize: 15 }}>Checked Single-Breasted Blazer</Text>
                    <Text style={{ fontSize: 18 }}>Size     42 ▼          Qty 1  ▼ </Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>Delivery by    10 May 2XXX</Text>
                </View>

            </View>

            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <Image source={require('../img/copo.png')} />
                    <Text style={{ fontSize: 17, color: 'black' }}>Apply Coupons</Text>
                </View>
                <Text style={{ fontSize: 17, color: 'red' }}>Select</Text>
            </View>

            <View style={{ marginTop: 10 }}>
                <Image source={require('../img/line.png')} />

            </View>

            <View>
                <Text style={{ fontSize: 25, color: 'black' }}>
                    Order Payment Details
                </Text>
            </View>



            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ fontSize: 20, }}>Order Total</Text>
                <Text style={{ fontSize: 17, color: 'black' }}>$  7,000.00</Text>
            </View>


            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10
            }}>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginTop: 10,
                    gap: 10
                }}>
                    <Text style={{ fontSize: 20, }}>Convenience</Text>
                    <Text style={{ fontSize: 20, color: 'red' }}>Know More</Text>

                </View>
                <Text style={{ fontSize: 17, color: 'red' }}>Apply Coupon</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ fontSize: 20, }}>Delivery Fee</Text>
                <Text style={{ fontSize: 17, color: 'red' }}>Free</Text>
            </View>

            <View style={{ marginTop: 10 }}>
                <Image source={require('../img/line.png')} />
            </View>


            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems:'center'
                }}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    gap: 10
                }}>
                    <Text style={{ fontSize: 20, }}>Order Total</Text>

                </View>
                <Text style={{ fontSize: 20, color:'black'}}>$  7,000.00</Text>
            </View>

            <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    gap: 10
                }}>
                    <Text style={{ fontSize: 20, }}>EMI  Available </Text>
                    <Text style={{ fontSize: 20, color: 'red' }}>Details</Text>

                </View>

                <View 
                style={{marginTop:20}}>
                    <Text>
                    $  7,000.00
                    </Text>
                    <Text style={{fontSize: 15,color:'red'}}>
                    View Details
                        </Text>
<TouchableOpacity

style={styles.button}>
    <Text style={{color:'white',fontSize:20,}}>
    Proceed to Payment
    </Text>
</TouchableOpacity>


                </View>



        </View >
    )
}

export default Home6

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






