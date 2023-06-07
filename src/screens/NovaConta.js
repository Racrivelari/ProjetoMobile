import { View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import { RadioButton } from 'react-native-paper';
import React, { useState , useEffect} from 'react';
import DatePicker from 'react-native-date-picker'
import CustomButton from '../components/Button';
import {styles} from '../styles/NovaContaStyle'
import {formatDate } from "../components/CrudVacinas";
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const NovaConta = (props) => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('Masculino');

    const [email, setEmail] = useState('')
    const [senha1, setSenha1] = useState('')
    const [senha2, setSenha2] = useState('')
    const [erro, setErro] = useState(false); 

    const handleDateSelect = (date) => {
        setDate(date);
        setOpen(false);
    };

    const validar = () => {
        if (senha1 === senha2) {
            setErro(false);
          } else {
            setErro(true);
          }
    }

    useEffect(() => {
        validar();
      }, [senha1, senha2]);

    const cadastrar = () => {

        if (!erro) {
            createUserWithEmailAndPassword(auth, email, senha1)
                .then((user) => {
                    console.log("Usuário criado com sucesso: " + JSON.stringify(user))
                    props.navigation.pop()
                })
                .catch((error) => {
                    console.log("Erro ao cadastrar usuário: " + JSON.stringify(error))
                })
        }
    }

    return (

        <View style={styles.container}>

            <View style={{ marginTop: 70 }}></View>

            <View style={styles.row}>
                <Text style={styles.label}>Nome completo</Text>
                <TextInput style={styles.input} placeholder="Jurandir Pereira" placeholderTextColor="#419ED7" />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Sexo</Text>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={styles.containerRadio}>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="Masculino" color='#3F92C5' />
                            <Text style={styles.textI}> Masculino </Text>
                        </View>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="Feminino" color='#3F92C5' />
                            <Text style={styles.textI}> Feminino </Text>
                        </View>
                    </View>
                </RadioButton.Group>
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Data nascimento</Text>
                <TouchableOpacity style={styles.input} onPress={() => setOpen(true)}  >
                    <Image style ={styles.calendarIcon} source={require('../assets/images/calendar.png')} />
                    <Text style={styles.textD}> {formatDate(date)} </Text>
                </TouchableOpacity>
                <DatePicker modal title='Selecione a data' open={open} date={date} locale='pt-BR' mode='date' 
                    onConfirm={handleDateSelect} 
                    onCancel={() => setOpen(false)}
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput style={styles.input} placeholder="jurandir.pereira@hotmail.com" placeholderTextColor="#419ED7" value={email} onChangeText={setEmail} />
                
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Senha</Text>
                <TextInput secureTextEntry={true} style={styles.input} placeholder="*******" placeholderTextColor="#419ED7" value={senha1} onChangeText={setSenha1}  />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Repetir senha</Text>
                <TextInput secureTextEntry={true} style={styles.input} placeholder="****" placeholderTextColor="#419ED7" value={senha2} onChangeText={setSenha2} />
            </View>

            {erro && (
                <Text style={styles.textSenhaInvalida}>Senha não confere!</Text>
            )}

            <View style={styles.botoes}>
                <CustomButton onPress={() => {cadastrar()}} color= "#37BD6D" width={160} height={40} text= "Cadastrar"/>
            </View>

        </View>

    );
};

export default NovaConta

