import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Experiments from './Screens/experiments';
import PeriodicTable from './Screens/periodic_table';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Periodic Table of Elements">
        <Stack.Screen name="Experiments" component={Experiments} options={{title: "Periodic Table of Elements", headerStyle: {backgroundColor: 'red'}, headerTitleStyle: { alignSelf: 'center' }}} />
        <Stack.Screen name="Periodic Table of Elements" component={PeriodicTable}  options={() => ({ headerTitleAlign: 'center'})} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}