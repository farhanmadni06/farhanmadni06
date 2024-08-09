import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';




const Login = () => {
    const navigation= useNavigation()

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const createUser = () => {
    //     auth()
    //         .signInWithEmailAndPassword(email, password)
    //         .then(() => {
    //             console.log('User account created & signed in!');
    //         })
    //         .catch(error => {
    //             if (error.code === 'auth/email-already-in-use') {
    //                 console.log('That email address is already in use!');
    //             }

    //             if (error.code === 'auth/invalid-email') {
    //                 console.log('That email address is invalid!');
    //             }

    //             console.error(error);
    //         });

    // }


    return (
        <View style={{
            flex: 1,
            margin: 20,

        }}
        >
            <Text
                style={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: 50
                }}
            >Welcome        Back!
            </Text>

            <View
                style={
                    styles.box1}>
                <AntDesign
                    size={20}
                    name='user'
                />
                <TextInput
                    placeholder='Username or Email'
                    // value={email}
                    // onChangeText={txt => setEmail(txt)}
                />
            </View>

            <View
                style={
                    styles.box2}>

                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <Entypo
                        size={20}
                        name='lock'
                        color='black' />
                    <TextInput
                        placeholder='Password'
                        // value={password}
                        // onChangeText={txt => setPassword(txt)}
                    />
                </View>
                <View>
                    <Entypo
                        size={20}
                        name='eye'
                        color='black' />
                </View>
            </View>

            <TouchableOpacity 
            onPress={()=> navigation.navigate('ForgotPassword') }
            >
                <Text style={{
                    textAlign: 'right',
                    color: 'red',
                    marginTop: 10
                }}>Forgot Password?</Text>
            </TouchableOpacity>


            <TouchableOpacity
            onPress={()=>   navigation.navigate('Getstart')} style={styles.button}
             >
                <Text style={styles.buttontext}>Login</Text>
            </TouchableOpacity>


            <View style={{
                alignItems: 'center',
                marginTop: '20%'
            }}>
                <Text>- OR Continue with -</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
                gap: 10
            }}>
                <Image source={require('../img/Google.png')} />
                <Image source={require('../img/Apple.png')} />
                <Image source={require('../img/Facebook.png')} />
            </View>


            <View style={{
                flexDirection: 'row',
                gap: 10,
                justifyContent: 'center',
                marginTop: '10%'
            }}>
                <Text>Create An Account</Text>
                <TouchableOpacity
                onPress={()=> navigation.navigate('Create') }
                >
                    <Text
                        style={{ color: 'red', fontWeight: 'bold', }}
                    >
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}







export default Login

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
        paddingHorizontal: '43%',
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: '#F83758',
        alignSelf: 'center',
        marginTop: '10%'
    },
    buttontext: {
        color: 'white',
       textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
        
    },
})