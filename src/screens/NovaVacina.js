import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker'
import CustomButton from '../components/Button';
import { styles } from '../styles/NovaVacinaStyle';
import { cadastrarVacina, formatDate} from "../components/CrudVacinas";
import { launchCamera } from 'react-native-image-picker'
// import { auth } from '../firebase/config'
import { useSelector } from 'react-redux'


const NovaVacina = (props) => {

    const [openVac, setOpenVac] = useState(false)
    const [openProx, setOpenProx] = useState(false)

    const handleDateSelect = (setDate, setOpen) => (date) => {
        setDate(date);
        setOpen(false);
    };

    const [nome, setNome] = useState('Hepatite B');
    const [dose, setDose] = useState('1a. dose');
    const [dateVac, setDateVac] = useState(new Date());
    const [dateProx, setDateProx] = useState(new Date());
    const [foto, setFoto] = useState()
    const [urlFoto, setUrlFoto] = useState('')

    const uid = useSelector((state) => state.slices.uid)

    // const uid = auth.currentUser.uid

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
                    onCancel={() => setOpenVac(false)} />
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

            {/* <Image style={styles.imgComprovante} source={require('../assets/images/image-comprovante.png')} /> */}

            <View style={[styles.row, { marginTop: 15 }]}>
                <Text style={styles.label}>Próxima vacinação</Text>
                <TouchableOpacity style={styles.input} onPress={() => setOpenProx(true)}  >
                    <Image style={styles.calendarIcon} source={require('../assets/images/calendar.png')} />
                    <Text style={styles.textD}> {formatDate(dateProx)} </Text>
                </TouchableOpacity>
                <DatePicker modal title='Selecione a data' open={openProx} locale='pt-BR'date={dateProx} mode='date'
                    onDateChange={(date) => setDateProx(date)}
                    onConfirm={handleDateSelect(setDateProx, setOpenProx)}
                    onCancel={() => setOpenProx(false)}
                />
            </View>

            <View style={styles.botoes}>
                <CustomButton onPress={() => cadastrarVacina(nome, dose, formatDate(dateVac), formatDate(dateProx), urlFoto, uid, props)} color="#37BD6D" width={160} height={40} text="Cadastrar" />
            </View>

        </View>
    );
};

export default NovaVacina

