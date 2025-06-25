// screens/EditTransactionScreen.js
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Picker, Text, Alert } from 'react-native';
import { TransactionContext } from '../context/TransactionContext';

const EditTransactionScreen = ({ route, navigation }) => {
  const { transaction, index } = route.params;
  const { transactions, setTransactions } = useContext(TransactionContext);

  const [date, setDate] = useState(transaction.date);
  const [amount, setAmount] = useState(transaction.amount);
  const [description, setDescription] = useState(transaction.description);
  const [location, setLocation] = useState(transaction.location);
  const [type, setType] = useState(transaction.type);
  const [category, setCategory] = useState(transaction.category);

  const handleUpdate = () => {
    if (!date || !amount || !description || !location) {
      Alert.alert('Please fill all fields');
      return;
    }
    const updated = { date, amount, description, location, type, category };
    const newList = [...transactions];
    newList[index] = updated;
    setTransactions(newList);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Date" value={date} onChangeText={setDate} style={styles.input} />
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
      <TextInput placeholder="Location" value={location} onChangeText={setLocation} style={styles.input} />

      <Text>Transaction Type</Text>
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

      <Button title="Update Transaction" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10 }
});

export default EditTransactionScreen;
