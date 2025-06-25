
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const COLORS = {
  Credit: '#00c897',
  Debit: '#fd79a8',
  Refund: '#4e9af1',
  '🛍️ Shopping': '#00c897',
  '✈️ Travel': '#4e9af1',
  '💡 Utility': '#f1c40f',
  '🍽️ Food': '#fd79a8',
  '🏥 Medical': '#a29bfe',
  '🎉 Entertainment': '#ff7675',
  '📚 Education': '#55efc4',
  '🔧 Other': '#636e72',
  Default: '#34495e',
};

const TransactionDetailScreen = ({ route, navigation }) => {
  const { transaction, index } = route.params;

  const getColor = (value) => COLORS[value] || COLORS.Default;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 Transaction Details</Text>

      <View style={styles.row}>
        <Text style={styles.label}>📅 Date:</Text>
        <Text style={styles.value}>{transaction.date}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>💲 Amount:</Text>
        <Text style={styles.value}>${transaction.amount}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>📝 Description:</Text>
        <Text style={styles.value}>{transaction.description}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>📍 Location:</Text>
        <Text style={styles.value}>{transaction.location}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>💳 Type:</Text>
        <View style={[styles.badge, { backgroundColor: getColor(transaction.type) }]}>
          <Text style={styles.badgeText}>{transaction.type}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>🏷️ Category:</Text>
        <View style={[styles.badge, { backgroundColor: getColor(transaction.category) }]}>
          <Text style={styles.badgeText}>{transaction.category}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('EditTransaction', { transaction, index })
        }
      >
        <Text style={styles.buttonText}>✏️ Edit Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f6f9',
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    marginBottom: 12,
  },
  label: {
    fontWeight: 'bold',
    color: '#2d3436',
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: '#34495e',
    marginTop: 2,
  },
  badge: {
    marginTop: 6,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#00c897',
    marginTop: 30,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#00c897',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
});

export default TransactionDetailScreen;
