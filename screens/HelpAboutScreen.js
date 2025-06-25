
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HelpAboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>❓ Help & About</Text>

      <Text style={styles.text}>👋 Welcome to <Text style={styles.bold}>ExpenseTracker</Text>!</Text>
      <Text style={styles.text}>
        This app helps you stay in control of your finances by allowing you to:
      </Text>

      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>• Add, view, and edit financial transactions</Text>
        <Text style={styles.bullet}>• Filter transactions by type or category</Text>
        <Text style={styles.bullet}>• View summaries of your expenses</Text>
        <Text style={styles.bullet}>• Stay informed about your financial health</Text>
      </View>

      <Text style={styles.footer}>📱 Version 1.0 | Developed for INFO-6132</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f6f9',
    padding: 20,
    flexGrow: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: '900',
    color: '#16a085',  
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Georgia', 
    textShadowColor: '#0e6655',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  text: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 12,
    fontFamily: 'System',  
    lineHeight: 24,
  },
  bulletContainer: {
    marginTop: 10,
    paddingLeft: 10,
  },
  bullet: {
    fontSize: 16,
    color: '#2c3e50',
    marginBottom: 10,
    fontFamily: 'System',
  },
  bold: {
    fontWeight: 'bold',
    color: '#00c897',
  },
  footer: {
    marginTop: 40,
    fontSize: 14,
    color: '#7f8c8d',
    fontStyle: 'italic',
    textAlign: 'center',
    fontFamily: 'Georgia',
  },
});

export default HelpAboutScreen;
