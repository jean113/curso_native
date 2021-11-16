import React, { useState, useContext } from 'react';
import { Alert, Pressable, Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import axios from 'axios';
import AuthContext from '../../contexts/auth';
import LottieView from 'lottie-react-native';


const Login = () =>{

    /*
        email: eve.holt@reqres.in
        senha: cityslicka
     */

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const {SignIn} = useContext(AuthContext);
    
    const entrar = () =>{
        axios.post('https://reqres.in/api/login', {
            email: email,
            password: senha
        }).then((res) => {
             SignIn(res.data.token);
            
        }).catch(() => {
            Alert.alert('Email ou senha incorretos');
        });
    }

    return(
        
        <View style={styles.container}>

          <LottieView style={styles.icone} source={require('../../assets/63043-facebook.json')} autoPlay loop />

           <Text style={styles.text}>Email</Text>
           <TextInput style={styles.input} value={email} placeholder="Digite aqui" onChangeText={(e)=> setEmail(e)}></TextInput>
           
           <Text style={styles.text}>Senha</Text>
           <TextInput style={styles.input} value={senha} placeholder="Digite aqui" secureTextEntry onChangeText={(e)=> setSenha(e)}></TextInput>
        
            <Pressable style={styles.button}  onPress={() => entrar()}>
                <Text style={styles.textButton}>Entrar</Text>
            </Pressable>

        </View>
    )
}

export default Login;