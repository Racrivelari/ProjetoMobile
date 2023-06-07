import { View, Text, Image, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react';
import CustomButton from '../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../styles/LoginStyle'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'
import { useDispatch } from 'react-redux'
import { reducerSetSlice } from '../redux/slices';

const Login = (props) => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState(false); 

  const dispatch = useDispatch()

  const autenticarUsuario = () => {

    signInWithEmailAndPassword(auth, email, senha)
      .then((userLogged) => {
        dispatch(reducerSetSlice({ email: userLogged.user.email, uid: userLogged.user.uid}))
        props.navigation.push('DrawerNavigation')
      })
      .catch(() => {
        setErro(true);
      })
  }

    return (

        <View style={styles.container}>

            <ImageBackground style={styles.imgBackground} source={require('../assets/images/imgindex.jpg')}> 
                <LinearGradient colors={[ '#d4d4d4', '#b9cdd6b3', '#d4d4d4' ]} style={{ flex: 1 }}/> 
            </ImageBackground>

            <View style={styles.content}>
              <Image source={require('../assets/images/icone-vacina.png')}/>
              <Text style={styles.text}>MyHealth</Text>
            </View>

            <View style={styles.content2}>
              <Text style={styles.text2}>Controle as suas vacinas e fique seguro</Text>
            </View>

            <View style={styles.login}>
                <View style ={styles.row}>
                  <Text style={styles.label}>E-mail</Text>
                  <TextInput style={styles.input} placeholder="jurandir.pereira@hotmail.com" placeholderTextColor="#419ED7" value={email} onChangeText={setEmail} />
                </View>
                
                <View style ={styles.row}>
                  <Text style={styles.label}>Senha</Text>
                  <TextInput secureTextEntry={true} style={styles.input} placeholder="********" placeholderTextColor="#419ED7" value={senha} onChangeText={setSenha} />
                </View>

                <View>
                  {erro && (
                    <Text style={styles.textInvalido}>E-mail e/ou senha inválidos.</Text>
                  )}
                </View>

                <View style={styles.botoes}>
                    <CustomButton onPress={() => {autenticarUsuario()}} color= "#37BD6D" width={140} height={40} text= "Entrar"/> 
                    <CustomButton onPress={() => props.navigation.push('NovaConta')} color= "#419ED7" width={190} height={40} marginTop={70} text= "Criar minha conta"/>
                    <CustomButton onPress={() => props.navigation.push('RecuperarSenha')} color= "#B0CCDE" width={190} height={40} marginTop={70} text= "Esqueci minha senha"/>
                </View>
            </View>

        </View>
      
    );
};

export default Login

