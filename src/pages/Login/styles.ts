import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF1CA', 
    padding: 50,
    
  },
  form: {
    flex: 1,
    width: '100%',
    maxWidth: 700,
  },
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop:100,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#DCDCDC',
    
  },
  helpText: {
    color: '#4682B4',
    textAlign: 'right',
    marginBottom: 10,
  },
  
  loginButton: {
    backgroundColor: '#4682B4',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },

  registerButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#4682B4',
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
    marginTop:5,
  },

  loginText: {
    color: 'white', // Cor do texto para o botão de login
    fontWeight: 'bold',
  },

  registerText: {
    color: '#4682B4', // Cor do texto para o botão de registro
    fontWeight: 'bold',
  },
  wave: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ComeText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#4682B4',
  },
});
