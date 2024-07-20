import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabsRoutesLayout(){
    return (
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen 
            name="index"
            options={{
                title: "",
                tabBarIcon: ({size, color}) => <MaterialIcons name="home" size={size} color={color}/>
            }}
            />
            <Tabs.Screen 
            name="senhas"
            options={{
                title: "",
                tabBarIcon: ({size, color}) => <MaterialIcons name="key" size={size} color={color}/>
            }}
            />
        </Tabs>      
    )
}
