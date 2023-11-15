import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { navBarStyles } from './styles';

interface NavBarProps {
  icons: string[];
  labels: string[];
}

const NavBar: React.FC<NavBarProps> = ({ icons, labels }) => {
  return (
    <View style={navBarStyles.container}>
      {icons.map((icon, index) => (
        <TouchableOpacity key={index} style={navBarStyles.item}>
          {/* Use aqui seus ícones (por exemplo, ícones do React Native Vector Icons) */}
          <Text>{icon}</Text>
          <Text>{labels[index]}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavBar;