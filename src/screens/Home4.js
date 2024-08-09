import { View, Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Home4 = () => {
    return (




        <View style={{ flex: 1, margin: 20 }}>




            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Image source={require('../img/left2.png')} />

                <View style={{ alignSelf: 'center', }}>
                    <Text style={{ fontSize: 25 }}>Checkout </Text>
                </View>
            </View>

            <View style={{ alignSelf: 'center' }}>
                <Image source={require('../img/profile.png')} />
            </View>


            <ScrollView>

                <View style={{ gap: 15, marginTop: 10 }}>
                    <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>Personal Details</Text>
                    <Text style={{ fontSize: 20, color: 'black' }}>Email Address</Text>
                </View>


                <TextInput
                    style={styles.textinput}
                    placeholder='farhanmadni91@gmail.com'
                />

                <Text style={{ marginTop: 10, fontSize: 20, color: 'black' }}>Password</Text>
                <TextInput
                    style={styles.textinput}
                    placeholder='***********'
                />
                <Text style={{ marginTop: 10, alignSelf: 'flex-end', fontSize: 20, color: 'red' }}>Change Password</Text>

                <Text style={{ marginTop: 10, fontSize: 20, color: 'black' }}>Business Address Details</Text>

                <Text style={{ marginTop: 10, fontSize: 18, color: 'black' }}>Pincode</Text>
                <TextInput
                    style={styles.textinput}
                    placeholder='450116'
                />


                <Text style={{ marginTop: 10, fontSize: 18, color: 'black' }}>Address</Text>
                <TextInput
                    style={styles.textinput}
                    placeholder='216 St Paul '
                />


                <Text style={{ marginTop: 10, fontSize: 18, color: 'black' }}>State</Text>
                <TextInput
                    style={styles.textinput}
                    placeholder='N1 2LL, '
                />

                <Text style={{ marginTop: 10, fontSize: 18, color: 'black' }}>Country</Text>
                <TextInput
                    style={styles.textinput}
                    placeholder='United Kingdom '
                />

                <View style={{ gap: 15, marginTop: 10 }}>
                    <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>Bank Account Details</Text>
                    <Text style={{ fontSize: 20, color: 'black' }}>Bank Account Number</Text>
                </View>


                <TextInput
                    style={styles.textinput}
                    placeholder='204356XXXXXXX'
                />

                <Text style={{ marginTop: 10, fontSize: 18, color: 'black' }}>Account Holder’s Name</Text>
                <TextInput
                    style={styles.textinput}
                    placeholder='Abhiraj Sisodiya'
                />

                <Text style={{ marginTop: 10, fontSize: 18, color: 'black' }}>IFSC Code</Text>
                <TextInput
                    style={styles.textinput}
                    placeholder='SBIN00428 '
                />

                <TouchableOpacity
                    style={styles.button}>
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Save</Text>

                </TouchableOpacity>




            </ScrollView>




        </View>
    )
}

export default Home4

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
        marginBottom: 10,
        gap: 10,
        padding: 15,
        shadowOpacity: 10,
        shadowOffset: 2,
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






