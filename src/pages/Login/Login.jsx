import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, TextInput, TouchableOpacity, View, Image, Text } from 'react-native';
import { styles } from './styles';

import logo from '../../assets/petz-removebg-preview.png'

   function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   

    function handleLogin() {
        if (!email || !password) {
            Alert.alert('Warning', 'Please, fill in email and password fields');
            return;
        }
    }
    
    function handleRegister() {

    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding">
                <ScrollView keyboardShouldPersistTaps="always">
                    <View style={styles.form}>
                        <Image source={logo} style={styles.logo} />

                        <TextInput
                            style={styles.input}
                            placeholder="Email ou CPF"
                            onChangeText={text => setEmail(text)}
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            onChangeText={text => setPassword(text)}
                            secureTextEntry
                        />
                        <TouchableOpacity>
                            <Text style={styles.helpText}>Esqueci minha senha</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                            <View style={styles.wave}>
                                <Text style={styles.loginText}>Entrar</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                            <View style={styles.wave}>
                                <Text style={styles.registerText}>Ainda não tem conta? Clique aqui.</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.ComeText}>Começar sem login.</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

export default Login;