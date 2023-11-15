import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import { Button } from '../../components/Buttons/index';
import NavBar from '../../components/navBar';

function Home() {

  const icons = ['Icon1', 'Icon2', 'Icon3', 'Icon4', 'Icon5'];
  const labels = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];


   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Text style={styles.text}> Banho e Tosa </Text>
         </View>
         <View style={styles.boximagem}>
            <Image source={require('../../assets/Banhotosa.jpg')} style={styles.imagem} />
         </View>
         <Button text={'Agendar Serviço'} />
         <Button text={'Meus agendamentos'} />
         {/* Adiciona a barra de navegação no final da tela */}
      <NavBar icons={icons} labels={labels} />
      </View>
   );
}

export default Home;
