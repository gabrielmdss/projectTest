import { useState } from 'react';
import Button from '@/components/button';
import { useAuth, useUser } from '@clerk/clerk-expo';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import  Slider from '@react-native-community/slider';
import {ModalPassword} from '@/components/modal'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function Home(){
    const { user } = useUser()
    const { signOut } = useAuth()
    const userName = user?.firstName;

    const [passwordValue, setPasswordValue] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    
    let size = 6;

    function generatePassword (){
        let password = ''
        
       
    
        for (let i = 0, n = charset.length; i < size; i++){
          password += charset.charAt(Math.floor(Math.random() * n))
        }
    
        setPasswordValue(password)
        setModalVisible(true);
      }

    return (
        <View style={styles.container}>
            <Image source={{uri: user?.imageUrl}} style={styles.image}/>
            <Text style={styles.text}>Olá {userName}</Text>

            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>Gerar senha com {size } caracteres</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType='fade' transparent={true}>
                <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
            </Modal>


            <TouchableOpacity style={styles.button}>
            <Button icon="exit" title='Sair' onPress={() => signOut()}/>
            </TouchableOpacity>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent:'center',
        alignItems:'center',
        gap: 12,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    image: {
        width: 92,
        height: 92,
        borderRadius: 12
    },
    button: {
        backgroundColor: '#000',
        width: '80%',
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 8,
        marginBottom: 18,
        padding: 1
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20, 
      },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: '80%',
        backgroundColor: '#000',
        borderRadius: 8,
        padding: 1
    },
    
})