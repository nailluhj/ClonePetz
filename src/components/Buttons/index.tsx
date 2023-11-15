import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';

const Button = ({ text }) => {
   return (
      <View style={styles.boxButton}>
         <TouchableOpacity style={styles.button}>
            <Text style={styles.textBotton}> {text} </Text>
         </TouchableOpacity>
      </View>
   );
   
};
export { Button };
