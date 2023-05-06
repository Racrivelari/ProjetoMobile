import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Login";
import RecuperarSenha from "./RecuperarSenha";
import Home from "./Home";
import NovaConta from "./NovaConta";
import EditarVacina from "./EditarVacina";
import ProximasVacinas from "./ProximasVacinas";
import NovaVacina from "./NovaVacina";

const Stack = createStackNavigator();

const Navigation = () => {
    return (    
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, headerStyle:{ backgroundColor: '#C1E7E3'}, 
            headerTintColor: '#419ED7',}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="NovaConta" component={NovaConta} />
                <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
                <Stack.Screen name="NovaVacina" component={NovaVacina} />
                <Stack.Screen name="EditarVacina" component={EditarVacina} />
                <Stack.Screen name="ProximasVacinas" component={ProximasVacinas} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;