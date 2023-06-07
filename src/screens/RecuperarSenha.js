import { View, Text, Image, TextInput } from 'react-native'
import  CustomButton from '../components/Button';
import {styles} from '../styles/RecuperarSenhaStyle';
import { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase/config'

const RecuperarSenha = (props) => {

    const [email, setEmail] = useState('')

    const redefinirSenha = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("E-mail de redefinição enviado com sucesso. Abra sua caixa de entrada")
                props.navigation.pop()
            })
            .catch((error) => {
                console.log("Erro ao redefinir: " + JSON.stringify(error))
            })
    }

    return (

        <View style={styles.container}>
            
            <View style={styles.nav}>
              <Image source={require('../assets/images/icone-vacina.png')}/>
              <Text style={styles.text}>MyHealth</Text>
            </View>

            <View style={styles.forms}>

                <View style ={styles.li}>
                  <Text style={styles.label}>E-mail</Text>
                  <TextInput style={styles.input} placeholder="jurandir.pereira@hotmail.com" placeholderTextColor="#419ED7" value={email} onChangeText={setEmail}/>
                </View>
                
                <View style ={styles.botao}>
                    <CustomButton onPress={() =>{redefinirSenha()}} color= "#37BD6D" width={160} height={40} text= "Recuperar senha"/>
                </View>

            </View>
        </View>
      
    );
};

export default RecuperarSenha

