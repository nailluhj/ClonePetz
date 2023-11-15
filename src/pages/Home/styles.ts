import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',  
        backgroundColor: '#F9F9F9',      
    },

    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#FAF1CA',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 30   
    },

    text: {
        flex: 1,
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginLeft: 30
        
    },

    boximagem: {
        width: "100%",
        height: "auto",       
        alignItems: 'center',  
        padding: 10,
        paddingHorizontal: 20,
    },
    
    imagem: { 
        width: 350,
        height: 350,        
        resizeMode: 'contain'
    },

    interrogacao: {
       width: 33,
       height: 33,
      
    },

    divinterrogacao: {

      justifyContent: 'flex-end',
      width: 'auto',
    
    },

    agendarButton: {
        backgroundColor: '#4682B4',
        borderRadius: 5,
        padding: 13,
        alignItems: 'center',
        marginBottom: 10,  
        width: '88%', 
      },

      agendamentosButton: {
        backgroundColor: 'transparent',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#4682B4',
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 5,
        width: '88%', 
      },

      agendamentosButtonText: {
        color: '#4682B4',
        fontSize: 14,
        fontWeight: '500',
      },

      textButton: {
        color: 'white',
        fontSize: 14,
        fontWeight: '300',
      },
});

