import { View, Text, Modal, Image, TextInput, TouchableOpacity } from 'react-native'
import { RadioButton } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-date-picker'
import CustomButton from '../components/Button';
import { styles } from '../styles/EditarVacinaStyle';
// import { editarVacina, excluirVacina, formatDate } from "../components/ArrayVacinas";
import { editarVacina, excluirVacina, formatDate } from "../components/CrudVacinas";
import { launchCamera } from 'react-native-image-picker'

const EditarVacina = (props) => {
    const vacina = props.route.params.item;

    const [modalVisible, setModalVisible] = useState(false);

    const [nome, setNome] = useState(vacina.nome);
    const [dose, setDose] = useState(vacina.dose);
      
    const converteData = (data) => {
        const [day, month, year] = data.split('/');
        return new Date(year, month - 1, day);
    };

    const [dateProx, setDateProx] = useState(converteData(vacina.dateProx));
    const [dateVac, setDateVac] = useState(converteData(vacina.dateVac));
    const [openProx, setOpenProx] = useState(false)
    const [openVac, setOpenVac] = useState(false)
    const [foto, setFoto] = useState()
    const [urlFoto, setUrlFoto] = useState(vacina.urlImagem)

  
    const handleDateSelect = (setDate, setOpen) => (date) => {
        setDate(date);
        setOpen(false);
    };

    const capturarImagem = () => {

        launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 })
            .then((result) => {
                setFoto(result.assets[0])
                setUrlFoto(result.assets[0].uri)
            })
            .catch((error) => {
                console.log("Error ao capturar imagem: " + JSON.stringify(error))
            })

    }

    return (

        <View style={styles.container}>

            <View style={{ marginTop: 70 }}></View>

            <View style={styles.row}>
                <Text style={styles.label}>Data de vacinação</Text>
                <TouchableOpacity style={styles.input} onPress={() => setOpenVac(true)}  >
                    <Image style={styles.calendarIcon} source={require('../assets/images/calendar.png')} />
                    <Text style={styles.textD}> {formatDate(dateVac)} </Text>
                </TouchableOpacity>
                <DatePicker modal title='Selecione a data' open={openVac} date={dateVac} locale='pt-BR' mode='date'
                    onDateChange={(date) => setDateVac(date)} 
                    onConfirm={handleDateSelect(setDateVac, setOpenVac)}
                    onCancel={() => setOpenVac(false)}
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Vacina</Text>
                <TextInput onChangeText={setNome} value={nome} style={styles.input} placeholder="Hepatite B" placeholderTextColor="#419ED7" />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Dose</Text>
                <RadioButton.Group onValueChange={setDose} value={dose}>
                    <View style={styles.containerRadio}>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="1a. dose" color='#3F92C5' />
                            <Text style={styles.textI}>1a. dose</Text>
                        </View>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="2a. dose" color='#3F92C5' />
                            <Text style={styles.textI}>2a. dose</Text>
                        </View>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="3a. dose" color='#3F92C5' />
                            <Text style={styles.textI}>3a. dose</Text>
                        </View>
                        <View style={styles.radioButtonContainer}>
                            <RadioButton value="Dose única" color='#3F92C5' />
                            <Text style={styles.textI}>Dose única </Text>
                        </View>
                    </View>
                </RadioButton.Group>
            </View>

            <View style={[styles.row]}>
                <Text style={styles.label}>Comprovante</Text>
                <CustomButton color="#419ED7" width={170} height={30} text="Selecione imagem..." onPress={() => { capturarImagem() }} />
            </View>

            {urlFoto ? <Image source={{ uri: urlFoto }} style={styles.imgComprovante} />: null}
            
            <View style={[styles.row, { marginTop: 15 }]}>
                <Text style={styles.label}>Próxima vacinação</Text>
                <TouchableOpacity style={styles.input} onPress={() => setOpenProx(true)}  >
                    <Image style={styles.calendarIcon} source={require('../assets/images/calendar.png')} />
                    <Text style={styles.textD}> {formatDate(dateProx)} </Text>
                </TouchableOpacity>
                <DatePicker modal title='Selecione a data' open={openProx} locale='pt-BR' date={dateProx} mode='date'
                    onDateChange={(date) => setDateProx(date)}
                    onConfirm={handleDateSelect(setDateProx, setOpenProx)}
                    onCancel={() => setOpenProx(false)}
                />
            </View>

            <View>
                <Modal animationType="fade" transparent={true} visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}>

                    <View style={styles.v1Modal}>
                        <View style={styles.v2Modal}>
                            <Text style={styles.textModal}>Tem certeza que deseja remover essa vacina?</Text>
                            <View style={styles.v3Modal}>
                                <CustomButton onPress={() => { excluirVacina(vacina.id, props) }} color="#FD7979" width={140} height={40} text="SIM" />
                                <CustomButton onPress={() => setModalVisible(false)} color="#3F92C5" width={140} height={40} text="CANCELAR" />
                            </View>
                        </View>
                    </View>

                </Modal>
            </View>

            <View style={styles.botoes}>
                <CustomButton onPress={() => { editarVacina(vacina.id, nome, dose, formatDate(dateVac), formatDate(dateProx), urlFoto, props) }} color="#37BD6D" width={160} height={40} text="Salvar alterações" />
                <CustomButton onPress={() => setModalVisible(true)} color="#FD7979" width={160} height={40} marginTop={40} text="Excluir" />
            </View>

        </View>

    );
};

export default EditarVacina

