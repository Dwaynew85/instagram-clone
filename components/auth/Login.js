import React, { useState } from 'react'
import { View, Button, TextInput } from 'react'

import firebase from 'firebase'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignIn = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <View>
               <TextInput 
                placeholder="email"
                onChangeText={(email) => setEmail({ email })}
               />
               <TextInput 
                placeholder="password"
                secureTextEntry={true}
                onChangeText={(password) => setPassword({ password })}
               /> 

               <Button
                onPress={() => onSignIn()}
                title="Sign In"
               />
            </View>
    )
}

