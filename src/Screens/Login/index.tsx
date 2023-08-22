import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { style } from './style'

export default function Login() {
    return (
        <View style={style.main}>
            <Image source={require('../../Images/logo.png')} style={style.image} />

            <TextInput style={style.textInput} placeholder='Email' autoComplete='email'/>
            <TextInput style={style.textInput} placeholder='Password' autoComplete='current-password'/>

            <TouchableOpacity style={style.buttonLogin} onPress={() => alert("Login")}>
                <Text>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}
