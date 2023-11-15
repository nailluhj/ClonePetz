import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import NavBar from '../../components/navBar';

function Home() {

   const icons = [
      { name: 'Icon1', image: require('../../assets/loja.png') },
      { name: 'Icon2', image: require('../../assets/clubz.png') },
      { name: 'Icon3', image: require('../../assets/banho.png') },
      { name: 'Icon4', image: require('../../assets/alertas.png') },
      { name: 'Icon5', image: require('../../assets/mais.png') },
    ];
    const labels = ['loja', 'clubz', 'banho & tosa', 'alertas', 'mais'];


   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Text style={styles.text}> banho & tosa </Text>
            <View style={styles.divinterrogacao}>
            <Image source= {require('../../assets/Interrogacao.png')} style={styles.interrogacao} />
            </View>
         </View>
         <View style={styles.boximagem}>
            <Image source={require('../../assets/Banhotosa.jpg')} style={styles.imagem} />
         </View>
         <TouchableOpacity style={styles.agendarButton}>
         <Text style={styles.textButton}>Agendar serviço</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.agendamentosButton}>
         <Text style={styles.agendamentosButtonText}>Meus agendamentos</Text>
       </TouchableOpacity>
        <NavBar icons={icons} labels={labels} />
    </View>

        
   );
}

export default Home;
