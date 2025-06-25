// screens/StatsReportScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TransactionContext } from '../context/TransactionContext';

const StatsReportScreen = () => {
  const { transactions } = useContext(TransactionContext);

  const total = transactions.reduce((sum, t) => sum + parseFloat(t.amount), 0);
  const byType = transactions.reduce((acc, t) => {
    acc[t.type] = (acc[t.type] || 0) + parseFloat(t.amount);
    return acc;
  }, {});

  const byCategory = transactions.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + parseFloat(t.amount);
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction Summary</Text>
      <Text>Total Amount: ${total.toFixed(2)}</Text>
      <Text style={styles.subheader}>By Type:</Text>
      {Object.entries(byType).map(([key, value]) => (
        <Text key={key}>{key}: ${value.toFixed(2)}</Text>
      ))}
      <Text style={styles.subheader}>By Category:</Text>
      {Object.entries(byCategory).map(([key, value]) => (
        <Text key={key}>{key}: ${value.toFixed(2)}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 20, marginBottom: 10, fontWeight: 'bold' },
  subheader: { marginTop: 10, fontWeight: 'bold' }
});

export default StatsReportScreen;
