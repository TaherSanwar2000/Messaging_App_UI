import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from '../Screens/ChatScreen';
import BottamTabNavigator from "./BottamTabNavigator";
import ContactsScreen from "../Screens/ContactsScreen";



const Stack = createNativeStackNavigator();

const Navigator = () => {

  return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: 'whitesmoke',}}}>
                <Stack.Screen name="Home" component={BottamTabNavigator} options={{ headerShown: false}}/>
                <Stack.Screen name="Chat" component={ChatScreen} />
                <Stack.Screen name="Contacts" component={ContactsScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
  );
};

export default Navigator;