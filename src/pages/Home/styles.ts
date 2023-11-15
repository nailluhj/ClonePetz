import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,        
    },
    header: {
        width: '100%',
        height: 90,
        backgroundColor: '#FAF1CA',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'justify'
        
    },

    boximagem: {
        width: "100%",
        height: "auto",       
        alignItems: 'center',  
        paddingHorizontal: 20,
    },
    
    imagem: { 
        width: 350,
        height: 350,        
        resizeMode: 'contain'
    }
});

