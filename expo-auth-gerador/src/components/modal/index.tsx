import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';
import useStorage from '@/hooks/useStorage'

export function ModalPassword ({password, handleClose}){
    const {saveItem} = useStorage()

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)

        alert('Senha salva com sucesso!')

        await saveItem("@pass", password);
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
                <TouchableOpacity onPress={async () => await handleClose()}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={async ()=> await handleCopyPassword()}>
                    <Text style={styles.buttonText}>Salvar</Text>
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
        backgroundColor: "#3a2bde",
        width: '80%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        borderStyle: "solid",
        borderColor: '#ecae31',
        borderWidth: 2
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#ecae31',
        marginBottom: 25,
    },
    innerPassword: {
        backgroundColor: "#ecae31",
        width: '60%',
        padding: 10,
        borderRadius: 8,
        

    },
    text: {
        color: '#3a2bde',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    },
    buttonArea: {
        flexDirection: "row",
        width: '45%',
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 20
    },
    
    buttonText: {
        fontWeight: "bold",
        fontSize: 18,
        color:'#ecae31'
    },
    buttonSave: {
        fontWeight: "bold",
        fontSize: 18,
        color:'#ecae31'
    }
    
})