import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const LostPW = () => {
  const [step, setStep] = useState(1);
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleVerify = () => {
    if (cpf === '123456789' && email === 'exemplo@email.com') {
      setStep(2);
    }
  };

  const handleVerifyCode = () => {
    if (code === '123456') {
      setStep(3);
    }
  };

  const handleSavePassword = () => {
    console.log('Nova senha salva com sucesso!');
  };

  const renderStepOne = () => (
    <View style={styles.login}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={setCPF}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Solicitar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderStepTwo = () => (
    <View style={styles.login}>
      <TextInput
        style={styles.input}
        placeholder="Código"
        value={code}
        onChangeText={setCode}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
        <Text style={styles.buttonText}>Verificar Código</Text>
      </TouchableOpacity>
    </View>
  );

  const renderStepThree = () => (
    <View style={styles.login}>
      <TextInput
        style={styles.input}
        placeholder="Nova Senha"
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Nova Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleSavePassword}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {step === 1 && renderStepOne()}
      {step === 2 && renderStepTwo()}
      {step === 3 && renderStepThree()}
    </View>
  );
};

export default LostPW;
