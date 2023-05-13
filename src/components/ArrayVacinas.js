export let listaVacinas = [];

import {Image, Text,TouchableOpacity, View} from 'react-native'
import {styles} from '../styles/VacinaStyle';


export const cadastrarVacina = (nome, dataVac, dataProx, dose, props) => {

  listaVacinas.push({
    id: listaVacinas.length === 0 ? 0 : listaVacinas[listaVacinas.length - 1].id + 1,
    nome: nome,
    dataVac: dataVac,
    dataProx: dataProx,
    dose: dose,
  });
  props.navigation.goBack();
// props.navigation.push('DrawerNavigation');
  listaVacinas.forEach((v) => {
    console.log(v);
  });
}


// CARD VACINA
export const Vacina = ({item}, props) => {

  return (
      <View style={styles.view}>
          <TouchableOpacity style={styles.card}>
              <Text style={styles.id}>{item.id}</Text>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.dose}>{item.dose}</Text>
              <Text style={styles.data}>{item.dataVac}</Text>
              <View>
                  <Image style={styles.imagem} source={require('../assets/images/image-comprovante.png')} />
              </View>
              <Text style={styles.proxima}>Proxima dose em: {item.dataProx}</Text>
          </TouchableOpacity >
      </View>
  )
}

