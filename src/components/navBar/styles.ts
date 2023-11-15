import { StyleSheet } from 'react-native';

export const navBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    position: 'absolute', 
    bottom: 0, 
    width: '100%'
  },
  item: {
    alignItems: 'center',
  },
});