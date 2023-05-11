import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker'
import CustomButton from '../components/Button';
import {styles} from '../styles/NovaContaStyle'
const NovaConta = (props) => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('Masculino');
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${day}/${month}/${year}`;

    //func que trata selecao da data
    const handleDateSelect = (date) => {
        setDate(date);
        setOpen(false);
    };

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
                    <Image style ={{position: 'absolute', width: 20, height: 25, marginLeft:200, marginTop: 5}} source={require('../assets/images/calendar.png')} />
                    <Text style={styles.textD}> {formattedDate} </Text>
                </TouchableOpacity>
                <DatePicker modal title='Selecione a data' open={open} date={date} locale='pt-BR' mode='date' 
                    onConfirm={handleDateSelect} 
                    onCancel={() => setOpen(false)}
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput style={styles.input} placeholder="jurandir.pereira@hotmail.com" placeholderTextColor="#419ED7" />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Senha</Text>
                <TextInput secureTextEntry={true} style={styles.input} placeholder="*******" placeholderTextColor="#419ED7" />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Repetir senha</Text>
                <TextInput secureTextEntry={true} style={styles.input} placeholder="****" placeholderTextColor="#419ED7" />
            </View>

            <Text style={{ color: 'red', fontFamily: 'AveriaLibre-Regular', fontSize: 16, marginLeft: 40 }}>Senha não confere!</Text>

            <View style={styles.botoes}>
                <CustomButton onPress={() => props.navigation.pop()} color= "#37BD6D" width={160} height={40} text= "Cadastrar"/>
            </View>

        </View>

    );
};




export default NovaConta

