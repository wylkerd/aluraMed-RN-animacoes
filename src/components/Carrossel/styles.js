import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 150,
    width: Dimensions.get('window').width, // pegando a largura máxima da tela do dispositivo,
    paddingLeft: 70
  },
  image: { 
    height: '100%', 
    width: 150,
    marginHorizontal: 15 
  }
})