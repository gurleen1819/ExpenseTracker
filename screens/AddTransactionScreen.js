// screens/AddTransactionScreen.js
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TransactionContext } from '../context/TransactionContext';

const AddTransactionScreen = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Credit');
  const [category, setCategory] = useState('Shopping');

  const { addTransaction } = useContext(TransactionContext);

  const handleAdd = () => {
    if (!date || !amount || !description || !location) {
      Alert.alert('Please fill all fields');
      return;
    }
    const newTransaction = { date, amount, description, location, type, category };
    addTransaction(newTransaction);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Date" value={date} onChangeText={setDate} style={styles.input} />
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
      <TextInput placeholder="Location" value={location} onChangeText={setLocation} style={styles.input} />

      <Text>Type</Text>
      <Picker selectedValue={type} onValueChange={setType}>
        <Picker.Item label="Credit" value="Credit" />
        <Picker.Item label="Debit" value="Debit" />
        <Picker.Item label="Refund" value="Refund" />
      </Picker>

      <Text>Category</Text>
      <Picker selectedValue={category} onValueChange={setCategory}>
        <Picker.Item label="Shopping" value="Shopping" />
        <Picker.Item label="Travel" value="Travel" />
        <Picker.Item label="Utility" value="Utility" />
      </Picker>

      <Button title="Add Transaction" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 6 }
});

export default AddTransactionScreen;
