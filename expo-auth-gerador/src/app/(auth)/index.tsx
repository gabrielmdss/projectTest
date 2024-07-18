import { useState } from 'react';
import Button from '@/components/button';
import { useAuth, useUser } from '@clerk/clerk-expo';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import {ModalPassword} from '@/components/modal';
import Ionicons from '@expo/vector-icons/Ionicons';


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function Home(){
    const { user } = useUser()
    const { signOut } = useAuth()
    const userName = user?.firstName;

    const [size, setSize] = useState(10)
    const [passwordValue, setPasswordValue] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    
    

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

            <Image source={require('../../assets/logo.png')}/>

            <Text style={styles.title}>{size} caracteres</Text>
            
            <View style={styles.area}>
            <Slider
                style={{height: 20, padding: 2}}
                minimumValue={4}
                maximumValue={10}
                minimumTrackTintColor="#3a2bde"
                maximumTrackTintColor="#ecae31"
                thumbTintColor="#3a2bde"
                value={size}
                onValueChange={(value) => setSize(value.toFixed(0)) }
            />
            </View>
            

            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>Gerar senha</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType='fade' transparent={true}>
                <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
            </Modal>


            <TouchableOpacity onPress={() => signOut()}>
                <Ionicons name="exit" size={32} color="#3a2bde" />
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
    button: {
        backgroundColor: '#3a2bde',
        width: '50%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 8,
        marginBottom: 18,
        padding: 1
    },
    buttonText: {
        backgroundColor: "#3a2bde",
        color: '#FFF',
        fontSize: 20, 
      },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: '80%',
        backgroundColor: '#ecae31',
        borderRadius: 8,
        padding: 1
    },
    header: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    buttonSignOut: {
        backgroundColor: 'red'
    },
    title: {
        color: '#3a2bde',
        fontSize: 25, 
        fontWeight: 'bold'
    }
})