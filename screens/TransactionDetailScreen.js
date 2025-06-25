// screens/TransactionDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TransactionDetailScreen = ({ route, navigation }) => {
  const { transaction, index } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>
      <Text>Date: {transaction.date}</Text>
      <Text>Amount: ${transaction.amount}</Text>
      <Text>Description: {transaction.description}</Text>
      <Text>Location: {transaction.location}</Text>
      <Text>Type: {transaction.type}</Text>
      <Text>Category: {transaction.category}</Text>

      <Button title="Edit" onPress={() => navigation.navigate('EditTransaction', { transaction, index })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }
});

export default TransactionDetailScreen;
