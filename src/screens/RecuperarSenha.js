import { View, Text, Image, TextInput } from 'react-native'
import  CustomButton from '../components/Button';
import {styles} from '../styles/RecuperarSenhaStyle';

const RecuperarSenha = (props) => {

    return (

        <View style={styles.container}>
            
            <View style={styles.nav}>
              <Image source={require('../assets/images/icone-vacina.png')}/>
              <Text style={styles.text}>MyHealth</Text>
            </View>

            <View style={styles.forms}>

                <View style ={styles.li}>
                  <Text style={styles.label}>E-mail</Text>
                  <TextInput style={styles.input} placeholder="jurandir.pereira@hotmail.com" placeholderTextColor="#419ED7"/>
                </View>
                
                <View style ={styles.botao}>
                    <CustomButton onPress={() => props.navigation.pop()} color= "#37BD6D" width={160} height={40} text= "Recuperar senha"/>
                </View>

            </View>
        </View>
      
    );
};

export default RecuperarSenha

