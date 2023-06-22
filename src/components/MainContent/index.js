import React from 'react';
import { SafeAreaView, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';

// Importe as imagens PNG desejadas
import ProductsIcon from './assets/loja.png';
import CartIcon from './assets/carrinho.png';
import ProfileIcon from './assets/perfil.png';
import OrderIcon from './assets/pedido.png';
 
const Tab = createBottomTabNavigator();

const MainContent = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size }) => {
            let iconSource;

            // Associe cada rota à imagem PNG correspondente
            if (route.name === 'Loja') {
              iconSource = ProductsIcon;
            } else if (route.name === 'Carrinho') {
              iconSource = CartIcon;
            } else if (route.name === 'Pedidos') {
              iconSource = OrderIcon;
            } else if (route.name === 'Perfil') {
              iconSource = ProfileIcon;
            } 

            // Renderize a imagem PNG
            return <Image source={iconSource} styles={{ width: size, height: size }} />;
          },
        })}
      >
        <Tab.Screen name="Loja" component={ProductsScreen} />
        <Tab.Screen name="Carrinho" component={CartScreen} />
        <Tab.Screen name="Pedidos" component={OrderScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
  );
};


const ProductsScreen = () => (
  <SafeAreaView style={styles.loja}>
    <Text>Loja</Text>
  </SafeAreaView>
);

const CartScreen = () => (
  <SafeAreaView style={styles.carrinho}>
    <Text>Carrinho</Text>
  </SafeAreaView>
);

const OrderScreen = () => (
  <SafeAreaView style={styles.order}>
    <Text>Pedidos</Text>
  </SafeAreaView>
);

const ProfileScreen = () => (
  <SafeAreaView style={styles.perfil}>
    <Text>Perfil</Text>
  </SafeAreaView>
);



const App = () => {
  return <MainContent />;
};

export default App;
