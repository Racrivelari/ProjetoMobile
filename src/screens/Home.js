import { View, Text, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react';
import CustomButton from '../components/Button';
import {styles} from '../styles/HomeStyle';
import {Vacina} from '../components/Vacina'

const Home = (props) => {

    const [pesquisa, setPesquisa] = useState("");

    const listaVacinas = [
      {
        id: 1,
        nome: 'BCG',
        data: '19/09/2022',
        dose: 'única',
        proxima: null
      },
      {
        id: 2,
        nome: 'Sarampo',
        data: '05/10/2022',
        dose: '1',
        proxima: '18/09/2024'
      },
      {
        id: 3,
        nome: 'Polio',
        data: '22/12/2019',
        dose: 'única',
        proxima: '22/12/2029'
      },
      {
        id: 4,
        nome: 'Covid',
        data: '22/12/2019',
        dose: 'única',
        proxima: '22/12/2029'
      },
      {
        id: 5,
        nome: 'Gripe',
        data: '22/12/2019',
        dose: '3',
        proxima: '22/12/2029'
      }
    ]

    return (

        <View style={styles.container}>
            
            <View style={styles.forms}>

                <View style= {styles.pesquisa}>
                    <TextInput placeholder="PESQUISAR VACINA..." placeholderTextColor={"#8B8B8B"} style={styles.txtPesquisa} value={pesquisa} onChangeText={setPesquisa}></TextInput>                
                </View>


              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <FlatList data={listaVacinas} renderItem={Vacina} keyExtractor={item => item.id} numColumns={2} />
              </View>

                {/* <View style ={styles.li}>
                  <Text style={styles.label}>BCG</Text>
                  <Text style={styles.label2}>20/09/2024</Text>
                </View>

                <View style ={styles.li}>
                  <Text style={styles.label}>DTpa</Text>
                  <Text style={styles.label2}>20/09/2024</Text>
                </View>

                <View style ={styles.li}>
                  <Text style={styles.label}>Sarampo</Text>
                  <Text style={styles.label2}>03/04/2026</Text>
                </View> */}
                
                <View style ={styles.botao}>
                    <CustomButton onPress={() => props.navigation.push('NovaVacina')} color= "#37BD6D" width={160} height={40} text= "Nova vacina"/>
                </View>

            </View>

        </View>
      
    );
};

export default Home

