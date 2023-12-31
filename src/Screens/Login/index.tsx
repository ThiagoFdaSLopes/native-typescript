import { View, Text, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { style } from './style'
import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login() {
    const navigation = useNavigation();
    const [show, setShow] = useState(true);
    return (
        <View style={style.main}>
            <Image source={require('../../Images/logo.png')} style={style.image} />

            <View style={style.content}>
                <MaterialCommunityIcons name='email' size={24} style={{ position: 'absolute', left: 30 }}/>
                <TextInput style={style.textInput} placeholder='Email' autoComplete='email' />
            </View>
            <View style={style.contentPassword}>
                <TextInput style={style.textInput} placeholder='Password' autoComplete='current-password' secureTextEntry={show} />
                <TouchableOpacity onPress={() => setShow(!show)}>
                    {
                        show ?
                            <MaterialCommunityIcons name="eye-off" size={24} style={{ marginLeft: -30, marginBottom: 9 }} />
                            :
                            <MaterialCommunityIcons name="eye" size={24} style={{ marginLeft: -30, marginBottom: 9 }} />
                    }
                </TouchableOpacity>
            </View>

            <Pressable onPress={() => alert("Forgot Password")}>
                <Text style={style.forgotPassword}>
                    Forgot Password? <Text style={style.personText}>Click Here!</Text>
                </Text>
            </Pressable>

            <Pressable style={style.buttonLogin} onPress={() => navigation.navigate("MainScreen" as never)}>
                <Text>
                    Login
                </Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Register" as never)}>
                <Text style={style.createAccount}>
                    You don't have account? <Text style={style.personText}>Click Here!</Text>
                </Text>
            </Pressable>
        </View>
    )
}
