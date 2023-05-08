import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import Home from '../screens/Home'
import ProximasVacinas from '../screens/ProximasVacinas'
import Login from '../screens/Login'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false, headerStyle: { backgroundColor: '#C1E7E3' },
            headerTintColor: '#ADD4D0',
        }}>
            <Drawer.Screen name="Home" component={Home} options={{ headerShown: true, 
                        headerTitle: 'Home',
                        headerTitleStyle: {
                            fontSize: 34,
                            fontFamily: 'AveriaLibre-Regular',
                            color: '#419ED7',
                        }
                    }} />
            <Drawer.Screen name="Proximas Vacinas" component={ProximasVacinas} options={{ headerShown: true, 
                        headerTitle: 'Próximas Vacinas',
                        headerTitleStyle: {
                            fontSize: 34,
                            fontFamily: 'AveriaLibre-Regular',
                            color: '#419ED7',
                        }
                    }}/>
            <Drawer.Screen name="Login" component={Login} />

        </Drawer.Navigator>
    )
}

export default DrawerNavigation;
