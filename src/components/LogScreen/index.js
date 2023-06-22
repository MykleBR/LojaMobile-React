import React from 'react';
import { TouchableOpacity, SafeAreaView, Text, TextInput, Image, View } from 'react-native';
import styles from './styles';
import googleIcon from './assets/google-icon.png';
import appleIcon from './assets/apple-icon.png';

const LoginScreen = ({ navigation }) => {
  const handleGoogleLogin = async () => {
   
  };
  
  const handleAppleLogin = async () => {
    
  };

  const handleLogin = () => {
    navigation.navigate('MainContent'); // Passar o nome da rota como uma string
  };

  const handleForgotPassword = () => {
    navigation.navigate('LossPW'); // Passar o nome da rota como uma string
  };

  const handleRegister = () => {
    navigation.navigate('NewUser'); // Passar o nome da rota como uma string
  };

  return (
    <SafeAreaView style={styles.login}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Login" />
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Esqueci a senha</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerText}>Cadastrar</Text>
      </TouchableOpacity>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
          <Image source={googleIcon} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={handleAppleLogin}>
          <Image source={appleIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
