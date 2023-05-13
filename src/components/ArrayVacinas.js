export let listaVacinas = [];

import {Image, Text,TouchableOpacity, View} from 'react-native'
import {stylesVacinas} from '../styles/CardVacina';
import {stylesProximas} from '../styles/CardProximaVacina'


export const cadastrarVacina = (nome, dataVac, dataProx, dose, props) => {
  // if (dose == "Dose única") dataProx = null
  listaVacinas.push({
    id: listaVacinas.length === 0 ? 0 : listaVacinas[listaVacinas.length - 1].id + 1,
    nome: nome,
    dataVac: dataVac,
    dataProx: dataProx,
    dose: dose,
  });
  props.navigation.goBack();
  listaVacinas.forEach((v) => {
    console.log(v);
  });
}

//retorna -1 se nao encontrar o elemento no array com base no id fornecido
export const editarVacina = (id, nome, dataVac, dataProx, dose, props) => {
  const vacinaIndex = listaVacinas.findIndex((v) => v.id === id);
  // if (dose == "Dose única") dataProx = null
  if (vacinaIndex !== -1) {
    listaVacinas[vacinaIndex] = {
      ...listaVacinas[vacinaIndex],
      nome,
      dataVac,
      dataProx,
      dose,
    };
  }
  props.navigation.goBack();
};

export const excluirVacina = (id, props) => {
  const vacinaIndex = listaVacinas.findIndex((v) => v.id === id);
  if (vacinaIndex !== -1) {
    listaVacinas.splice(vacinaIndex, 1);
  }
  props.navigation.goBack();
};

// CARD VACINA
export const Vacina = ({item}, props) => {
  return (
      <View style={stylesVacinas.view}>
          <TouchableOpacity style={stylesVacinas.card}  onPress={() => props.navigation.navigate('EditarVacina', {item})}> 
              <Text style={stylesVacinas.id}>{item.id}</Text>
              <Text style={stylesVacinas.nome}>{item.nome}</Text>
              <Text style={stylesVacinas.dose}>{item.dose}</Text>
              <Text style={stylesVacinas.data}>{item.dataVac}</Text>
              <View>
                  <Image style={stylesVacinas.imagem} source={require('../assets/images/image-comprovante.png')} />
              </View>
              {item.dose !== 'Dose única' ?
  <Text style={stylesVacinas.proxima}>Próxima dose em: {item.dataProx}</Text> :
  <Text style={stylesVacinas.proxima}>Não há próxima dose!</Text>
}

          </TouchableOpacity >
      </View>
  )
}

//CARD PROXIMAS
export const VacinaProx = ({item}) => {
  return (
      <View style={stylesProximas.view}>
             {item.dose != 'Dose única' ? (
             <View style={stylesProximas.card}>
                <Text style={stylesProximas.nome}>{item.nome}</Text>
                <Text style={stylesProximas.proximas}>{item.dataProx}</Text>
             </View>): ""}
      </View>

  )
}

