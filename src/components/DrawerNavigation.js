import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import Home from '../screens/Home'
import ProximasVacinas from '../screens/ProximasVacinas'
import {StyleSheet, Text} from 'react-native'


const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
            
            <Drawer.Navigator screenOptions={{
                drawerLabelStyle: { color: 'white' }, drawerStyle: { backgroundColor: '#ADD5D0'},
                headerShown: false,
                headerStyle: {
                    backgroundColor: '#C1E7E3'
                },
                headerTintColor: '#ADD4D0',

            }} drawerContent={(props) => <CustomDrawer {...props} />}>

                <Drawer.Screen name="Minhas vacinas" component={Home} options={{
                    headerShown: true,
                    headerTitle: 'Home',
                    headerTitleStyle: {
                        fontSize: 34,
                        fontFamily: 'AveriaLibre-Regular',
                        color: '#419ED7',
                    },
                    drawerLabel: () => (
                        <Text style={styles.txt}>Minhas vacinas</Text>
                      ),
                }} />

                <Drawer.Screen name="Proximas Vacinas" component={ProximasVacinas} options={{
                    headerShown: true,
                    headerTitle: 'Próximas Vacinas',
                    headerTitleStyle: {
                        fontSize: 34,
                        fontFamily: 'AveriaLibre-Regular',
                        color: '#419ED7',
                    },
                    drawerLabel: () => (
                        <Text style={styles.txt}>Próximas vacinas</Text>
                      ),
                }} />

                {/* <Drawer.Screen name="Sair" component={Login} /> */}

            </Drawer.Navigator>
            )
}


const styles = StyleSheet.create({
    txt:{
        color: '#419ED7', 
        fontFamily: 'AveriaLibre-Regular', 
        fontSize: 22,
        alignSelf: 'center'
    },
    // txt2:{
    //     color: '#419ED7', 
    //     fontFamily: 'AveriaLibre-Regular', 
    //     fontSize: 20,
    //     alignSelf: 'center'
    // }
})

export default DrawerNavigation;
