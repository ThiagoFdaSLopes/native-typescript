import { View, Text, TextInput, TouchableOpacity, Pressable, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { style } from './style'
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Register = () => {
    const navigation = useNavigation();
    const [show, setShow] = useState(true);
    const [secondShow, setSecondShow] = useState(true);
    const [authCreate, setAuthCreate] = useState(false)
    return (
        <View style={style.main}>
            <Image source={require('../../Images/logo.png')} style={style.image} />
            <Text style={style.title}>Register Account</Text>
            <View style={style.content}>
                <TextInput style={style.textInput} placeholder='Name' autoComplete='name' />
            </View>
            <View style={style.content}>
                <TextInput style={style.textInput} placeholder='Email' autoComplete='email' />
            </View>
            <View style={style.contentPassword}>
                <TextInput style={style.textInput} placeholder='Password' autoComplete='current-password' secureTextEntry={show} />
                <TouchableOpacity onPress={() => setShow(!show)}>
                    {
                        show ?
                            <MaterialCommunityIcons name="eye-off" size={24} style={{ marginLeft: -30, marginBottom: 10 }} />
                            :
                            <MaterialCommunityIcons name="eye" size={24} style={{ marginLeft: -30, marginBottom: 10 }} />
                    }
                </TouchableOpacity>
            </View>
            <View style={style.contentPassword}>
                <TextInput style={style.textInput} placeholder='Password' autoComplete='current-password' secureTextEntry={secondShow} />
                <TouchableOpacity onPress={() => setSecondShow(!secondShow)}>
                    {
                        secondShow ?
                            <MaterialCommunityIcons name="eye-off" size={24} style={{ marginLeft: -30, marginBottom: 10 }} />
                            :
                            <MaterialCommunityIcons name="eye" size={24} style={{ marginLeft: -30, marginBottom: 10 }} />
                    }
                </TouchableOpacity>
            </View>

            <Pressable style={style.buttonRegister} onPress={() => setAuthCreate(!authCreate)}>
                {
                    authCreate ? <ActivityIndicator size={24} color="black"/> :
                    <Text>Create Account</Text>
                }
            </Pressable>
        </View>
    )
}

export default Register
