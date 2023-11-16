import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF1CA', 
    paddingTop: 50,  
  },

  form: {
    paddingHorizontal: 20,
    width: 400,
  },

  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 40,
    marginTop:50,
  },

  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#DCDCDC',
    fontSize: 16,
    width: '100%',
  },

  helpText: {
    color: '#017DC5',
    textAlign: 'right',
    marginBottom: 25,
    fontSize: 15,
    fontWeight: '500',
  },
  
  loginButton: {
    backgroundColor: '#017DC5',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },

  registerButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#017DC5',
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
    marginTop:5,
  },

  loginText: {
    color: 'white', 
    fontWeight: '400',
    fontSize: 15,
  },

  registerText: {
    color: '#017DC5',
    fontWeight: '600',
    fontSize: 15,
  },

  wave: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  semLogin: {
    textAlign: 'center',
    marginTop: 20,
    color: '#017DC5',
    fontWeight: '600',
    fontSize: 15,
  },
});
