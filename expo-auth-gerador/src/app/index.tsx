import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import Button from '../components/button';

import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    
    const googleOAuth = useOAuth({strategy: "oauth_google"})

    async function loginComGoogle (){
        try {
            setIsLoading(true)

            const oAuthFlow = await googleOAuth.startOAuthFlow();

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
    <Text style={styles.title}>Entrar</Text>
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
        gap: 13

    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
})