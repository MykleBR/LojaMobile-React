import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'lightgreen'
  },
  icon: {
    width: 24,
    height: 24,
  },
  tabButton: {
    transform: [{ scale: 1.2 }], // Aumenta a escala do botão
  },
  activeIcon: {
    // Estilo para o ícone quando o botão estiver selecionado
    tintColor: 'green' // Cor do ícone quando selecionado
  },
  loja:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue'
  },
  carrinho:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red'
  },
  perfil:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'yellow'
  },
  order:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  }
});

export default styles;