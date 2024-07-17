import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';

export function ModalPassword ({password, handleClose}){

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)

        alert('Senha salva com sucesso!')

        handleClose();
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <Text style={styles.title}>Senha</Text>

            <Pressable style={styles.innerPassword} onLongPress={async ()=> await handleCopyPassword()}>
                <Text style={styles.text}>
                    {password}
                </Text>
            </Pressable>

            <View style={styles.buttonArea}>
                <TouchableOpacity style={styles.button} onPress={handleClose}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24,24,24,0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        backgroundColor: "#FFF",
        width: '82%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#000',
        marginBottom: 25,
    },
    innerPassword: {
        backgroundColor: "#000",
        width: '90%',
        padding: 14,
        borderRadius: 8,
        

    },
    text: {
        color: '#FFF',
        textAlign: "center",
    },
    buttonArea: {
        flexDirection: "row",
    },
    button: {
        marginTop: 18,      
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 18
    }
})