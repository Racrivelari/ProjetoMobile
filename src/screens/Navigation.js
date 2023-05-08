import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigation from "../components/DrawerNavigation";

import Login from "./Login";
import RecuperarSenha from "./RecuperarSenha";
import Home from "./Home";
import NovaConta from "./NovaConta";
import EditarVacina from "./EditarVacina";
import ProximasVacinas from "./ProximasVacinas";
import NovaVacina from "./NovaVacina";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false, headerStyle: { backgroundColor: '#C1E7E3' },
                headerTintColor: '#ADD4D0',
            }}>
                <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
                <Stack.Screen name="Login" component={Login} />
                {/* <Stack.Screen name="Home" component={Home} /> */}
                <Stack.Screen
                    name="NovaConta"
                    component={NovaConta}
                    options={{ headerShown: true, 
                        headerTitle: 'Nova Conta',
                        headerTitleStyle: {
                            fontSize: 34,
                            fontFamily: 'AveriaLibre-Regular',
                            color: '#419ED7',
                        }
                    }}
                />
                <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
                <Stack.Screen name="NovaVacina"
                    component={NovaVacina}
                    options={{ headerShown: true, 
                        headerTitle: 'Nova Vacina',
                        headerTitleStyle: {
                            fontSize: 34,
                            fontFamily: 'AveriaLibre-Regular',
                            color: '#419ED7',
                        }
                    }}
                />
                <Stack.Screen name="EditarVacina"
                    component={EditarVacina}
                    options={{ headerShown: true, 
                        headerTitle: 'Editar Vacina',
                        headerTitleStyle: {
                            fontSize: 34,
                            fontFamily: 'AveriaLibre-Regular',
                            color: '#419ED7',
                        }
                    }}
                />
                {/* <Stack.Screen name="ProximasVacinas" component={ProximasVacinas} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;