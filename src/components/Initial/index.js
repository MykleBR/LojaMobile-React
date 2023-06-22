import React, { useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function Initial({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.box}>
      <Text style={styles.apresentation}>Bem vindo a Go buds!</Text>
      <Text style={styles.textFormation}>Sua loja preferida está de cara nova!</Text>
    </View>
  );
}