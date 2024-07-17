import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router'

import Button from '../components/button'

export default function Login() {
 return (
   <View style={styles.container}>
    <Text style={styles.title}>Entrar</Text>
    <Button icon="logo-google" title="Entrar com Google" onPress={() => router.navigate("(auth)")}/>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: 'center',
        gap: 13

    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
})