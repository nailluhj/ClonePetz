import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { navBarStyles } from './styles';

interface NavBarProps {
  icons: { name: string; image: any }[];
  labels: string[];
}

const NavBar: React.FC<NavBarProps> = ({ icons, labels }) => {
  return (
    <View style={navBarStyles.container}>
      {icons.map((icon, index) => (
        <TouchableOpacity key={index} style={navBarStyles.item}>
           <Image source= {icon.image} style={{ width: 35, height: 35 }} />
           <Text style= {labels[index] === 'banho & tosa' ? { color: '#4682B4' } : {}}>
           {labels[index]}
           </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavBar;