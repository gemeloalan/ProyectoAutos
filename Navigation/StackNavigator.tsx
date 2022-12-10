import { createStackNavigator } from '@react-navigation/stack';
import { DosScreen } from '../screens/DosScreen';
import { FinalScreen } from '../screens/FinalScreen';
import { UnoScreen } from '../screens/UnoScreen';
import { InicioScreen } from '../screens/InicioScreen';
import { styles } from '../../estilo/appstyle';
import { Estudiante } from '../screens/Estudiante';
const Stack = createStackNavigator();

export  const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InicioScreen"  options={{title:"Pagina de Inicio"}}  component={InicioScreen}  />
      <Stack.Screen name="UnoScreen"  options={{title:"Pagina 1"}}  component={UnoScreen} />
      <Stack.Screen name="DosScreen"  options={{title:"Pagina 2"}}  component={DosScreen} />
      <Stack.Screen name="FinalScreen" options={{title:"Pagina Final"}}   component={FinalScreen} />
      <Stack.Screen name="Estudiante" options={{title:"Pagina Final"}}   component={Estudiante} />
    </Stack.Navigator>
    

  );
}