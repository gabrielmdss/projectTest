import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Liking from 'expo-linking';

import Button from '../../components/button';

import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    
    const googleOAuth = useOAuth({strategy: "oauth_google"})

    async function loginComGoogle (){
        try {
            setIsLoading(true)

            const redirecionarURL = Liking.createURL("/")
            const oAuthFlow = await googleOAuth.startOAuthFlow({ redirectUrl: redirecionarURL });

            if(oAuthFlow.authSessionResult?.type === 'success'){
                if(oAuthFlow.setActive){
                    await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId })
                }
            } else {
                setIsLoading(false)
            }

        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }



    useEffect(()=> {
        WebBrowser.warmUpAsync()

        return () => {
            WebBrowser.coolDownAsync()
        }
    })
 return (
   <View style={styles.container}>
    <View>
    <Text style={styles.text}>Gerador de Senhas</Text>
    </View>
    <Image source={require('../../assets/logo.png')} style={{marginBottom: 15}}/>
    <Button 
    icon="logo-google" 
    title="Entrar com Google" 
    onPress={loginComGoogle}
    isLoading={isLoading}
    />
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 13
    },
    text: {
        color: '#3a2bde',
        width: '90%',
        fontSize: 25,
        marginTop: 30,
        padding: 25,
        fontWeight: 'bold'
    }

})