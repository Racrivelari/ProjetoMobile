import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker'
import CustomButton from '../components/Button/Button';

const NovaConta = (props) => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('Masculino');
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${day}/${month}/${year}`;

    //func que trata selecao da data
    const handleDateSelect = (date) => {
        setDate(date);
        setOpen(false);
    };

    return (

        <View style={styles.container}>

            <View style={styles.nav}>
                <Image source={require('../assets/images/icone-vacina.png')} />
                <Text style={styles.text}>Nova Conta</Text>
            </View>

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
                    <Text style={styles.textD}> {formattedDate} </Text>
                </TouchableOpacity>
                <DatePicker modal open={open} date={date} mode='date' 
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
                <CustomButton onPress={() => props.navigation.push('Login')} color= "#37BD6D" size={160} text= "Cadastrar"/>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    textD: {
        color: '#419ED7',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 16
    },
    containerRadio: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#ADD5D0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nav: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#C1E7E3',
        width: "100%",
    },
    text: {
        fontSize: 34,
        fontFamily: 'AveriaLibre-Regular',
        color: '#419ED7',
    },
    textB: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    },
    textI: {
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
        alignSelf: 'center',
    },
    botoes: {
        justifyContent: 'center',
        flex: 1
    },
    button: {
        width: 160,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#37BD6D',
        shadowColor: 'black',
        elevation: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,

    },
    label: {
        marginRight: 10,
        width: 120,
        color: 'white',
        marginLeft: 4,
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'right',
    },
    input: {
        backgroundColor: 'white',
        width: 230,
        height: 30,
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        paddingVertical: 6,
        paddingHorizontal: 10,
        color: '#419ED7',
    },
});


export default NovaConta

