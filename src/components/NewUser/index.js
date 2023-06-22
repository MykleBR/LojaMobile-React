import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Register = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [nome, setNome] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [errors, setErrors] = useState({
    usuario: '',
    senha: '',
    confirmarSenha: '',
    nome: '',
    email: '',
    telefone: '',
  });

  const validarUsuario = () => {
    const regex = /^[a-zA-Z0-9]{8,12}$/;
    return regex.test(usuario);
  };

  const validarSenha = () => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}$/;
    return regex.test(senha);
  };

  const validarNome = () => {
    const regex = /^[a-zA-Z\s]{1,50}$/;
    return regex.test(nome);
  };

  const validarEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validarTelefone = () => {
    const regex = /^[0-9]{1,11}$/;
    return regex.test(telefone);
  };

  const handleSalvar = () => {
    const errorsCopy = { ...errors };

    if (!validarUsuario()) {
      errorsCopy.usuario = 'Usuário inválido';
    } else {
      errorsCopy.usuario = '';
    }

    if (!validarSenha()) {
      errorsCopy.senha = 'Senha inválida';
    } else {
      errorsCopy.senha = '';
    }

    if (!validarNome()) {
      errorsCopy.nome = 'Nome inválido';
    } else {
      errorsCopy.nome = '';
    }

    if (!validarEmail()) {
      errorsCopy.email = 'Email inválido';
    } else {
      errorsCopy.email = '';
    }

    if (!validarTelefone()) {
      errorsCopy.telefone = 'Telefone inválido';
    } else {
      errorsCopy.telefone = '';
    }

    setErrors(errorsCopy);

    // Verifica se há erros antes de salvar os dados do cadastro
    if (Object.values(errorsCopy).every((error) => error === '')) {
      // Lógica para salvar os dados do cadastro
      console.log('Dados do cadastro salvos com sucesso!');
    }
  };

  const handleLimpar = () => {
    setUsuario('');
    setSenha('');
    setConfirmarSenha('');
    setNome('');
    setDataNasc('');
    setEmail('');
    setTelefone('');
    setErrors({
      usuario: '',
      senha: '',
      confirmarSenha: '',
      nome: '',
      email: '',
      telefone: '',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={usuario}
          onChangeText={setUsuario}
        />
        {errors.usuario !== '' && <Text style={styles.errorText}>{errors.usuario}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        {errors.senha !== '' && <Text style={styles.errorText}>{errors.senha}</Text>}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        {errors.nome !== '' && <Text style={styles.errorText}>{errors.nome}</Text>}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={dataNasc}
        onChangeText={setDataNasc}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        {errors.email !== '' && <Text style={styles.errorText}>{errors.email}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
        />
        {errors.telefone !== '' && <Text style={styles.errorText}>{errors.telefone}</Text>}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonSave}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLimpar}>
        <Text style={styles.buttonClear}>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;