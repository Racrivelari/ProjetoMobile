import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DrawerNavigation from "../components/DrawerNavigation";
import Login from "./Login";
import RecuperarSenha from "./RecuperarSenha";
import NovaConta from "./NovaConta";
import EditarVacina from "./EditarVacina";
import NovaVacina from "./NovaVacina";
import { Provider } from "react-redux"
import { store } from "../redux/store"

const Stack = createStackNavigator();

const StackNaviScreenOptions = () => {
    return {
      headerShown: false,
      headerStyle: { backgroundColor: '#C1E7E3' },
      headerTintColor: '#ADD4D0',
    }
}

const StackScreenOptions = (text) => {
    return {
        headerShown: true, 
        headerTitle: {text}, 
        headerTitleStyle: {fontSize: 34,fontFamily: 'AveriaLibre-Regular',color: '#419ED7',}
    }
};

const Navigation = () => {
    return (

        <Provider store={store}>
            <NavigationContainer>
            <Stack.Navigator screenOptions={StackNaviScreenOptions}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="NovaConta" component={NovaConta} options={StackScreenOptions('Nova Conta')}/>
                    <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
                    <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
                    <Stack.Screen name="NovaVacina" component={NovaVacina} options={StackScreenOptions('Nova Vacina')}/>
                    <Stack.Screen name="EditarVacina" component={EditarVacina} options={StackScreenOptions('Editar Vacina')}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>

    )
}

export default Navigation;