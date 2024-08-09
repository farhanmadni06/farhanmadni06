import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
    const navigation= useNavigation()

    return (
        <View style={{
            flex: 1,
            margin:20,

        }}
        >
            <Text
                style={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: 50,
                }}
            >Forgot      password?
            </Text>

            <View
                style={
                    styles.box1}>
                <Ionicons
                    size={20}
                    name='mail'
                />
                <TextInput
                    placeholder='Enter your email address'
                />
            </View>

        

           <View style={{
            marginTop:'5%'
           }}>
            <Text>
            * We will send you a message to set or reset                                  your new password            </Text>
            </View>

            <TouchableOpacity
                        onPress={()=> navigation.navigate('Login') }

                style={styles.button}
            >
                <Text style={styles.buttontext}>Submit</Text>
            </TouchableOpacity>




            

        </View>
    )
}







export default ForgotPassword

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