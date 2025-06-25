// screens/HelpAboutScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelpAboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Help & About</Text>
      <Text style={styles.text}>Welcome to ExpenseTracker!</Text>
      <Text style={styles.text}>This app helps you track your personal finances by allowing you to:</Text>
      <Text style={styles.text}>- Add, view, and edit financial transactions</Text>
      <Text style={styles.text}>- Filter transactions by type or category</Text>
      <Text style={styles.text}>- View summaries of your expenses</Text>
      <Text style={styles.text}>- Stay informed about your financial health</Text>

      <Text style={styles.footer}>Version 1.0 | Developed for NFO-6132</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 22, marginBottom: 10, fontWeight: 'bold' },
  text: { marginBottom: 5 },
  footer: { marginTop: 20, fontStyle: 'italic', color: 'gray' }
});

export default HelpAboutScreen;
